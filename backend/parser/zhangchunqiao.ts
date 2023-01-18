// https://unpkg.com/browse/pdfjs-dist@2.14.305/legacy/build/pdf.js
import * as pdfjsLib from './pdf.js';

import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../types';
import {
  merge_to_lines,
  pdfjsContentToOCRResult,
  toChineseSymbols,
} from './utils';

type PartRaw = {
  page: number;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  merge_up?: boolean;
} & ContentPartRaw;
function extract_parts(
  ocr: OCRResult[],
  page: number,
  latest_part?: PartRaw,
): PartRaw[] {
  const res: PartRaw[] = [];
  for (let i = 0; i < ocr.length; ++i) {
    let text = ocr[i].text.trim();
    res.push({
      page,
      text,
      y1: ocr[i].box[0][1],
      y2: ocr[i].box[3][1],
      x1: ocr[i].box[0][0],
      x2: ocr[i].box[1][0],
      type:
        i == 0 && ocr[i].box[3][1] - ocr[i].box[0][1] > 13
          ? ContentType.title
          : res[res.length - 1]?.type === ContentType.title &&
            ocr[i].box[0][1] - res[res.length - 1].y2 < 10 &&
            !text.startsWith('附：') &&
            !Array.from(text.matchAll(/\d+\.\d+(\.\d+)?/g))[0] &&
            !Array.from(text.matchAll(/\d+年\d+(月\d+)?/g))[0]
          ? ContentType.title
          : ContentType.paragraph,
    });
  }
  const paragraphs = res.filter((i) => i.type === ContentType.paragraph);
  for (let i = 0; i < paragraphs.length; ++i) {
    const last = paragraphs[i - 1];
    const next = paragraphs[i + 1];
    const t = paragraphs[i];
    if (i == 0) {
      if (
        latest_part &&
        latest_part.type === ContentType.paragraph &&
        t.type === ContentType.paragraph
      ) {
        t.merge_up = Math.abs(latest_part.x2 - 528) < 10;
        continue;
      } else if (t.type == ContentType.title) {
        t.merge_up = false;
        continue;
      }
    }
    if (last && t.y1 - last.y2 > 10) {
      t.merge_up = false;
    } else {
      t.merge_up = true;
    }
    /*
    if (last && last.x < t.x && t.x - last.x > 30) {
      t.merge_up = false;
    } else if (next && next.x < t.x && t.x - next.x > 30) {
      t.merge_up = false;
    } else {
      t.merge_up = true;
    }
    */
  }
  return res;
}

function extract_date(part: ContentPart): Date | void {
  const format1 = Array.from(part.text.matchAll(/\d+\.\d+(\.\d+)?/g))[0];
  const format2 = Array.from(part.text.matchAll(/\d+年\d+(月\d+)?/g))[0];
  if (format1) {
    const s = format1[0].split('.').map((i) => parseInt(i));
    return {
      year: s[0],
      month: s[1],
      ...(s[2] > 0 ? { day: s[2] } : {}),
    };
  }
  if (format2) {
    const s = format2[0]
      .replace(/[年月日]/g, '.')
      .split('.')
      .map((i) => parseInt(i));
    return {
      year: s[0],
      month: s[1],
      ...(s[2] > 0 ? { day: s[2] } : {}),
    };
  }
  return;
}

function merge_parts(parts: PartRaw[]): ContentPart[] {
  const res: ContentPart[] = [];
  for (let i = 0; i < parts.length; ++i) {
    if (parts[i].merge_up && res[res.length - 1]?.type === parts[i].type) {
      res[res.length - 1].text += parts[i].text;
    } else {
      res.push({
        type: parts[i].type,
        text: parts[i].text,
      });
    }
  }
  return res;
}

function extract_authors(part: ContentPart) {
  const r = ['张春桥', '姚文元', '江青', '康生', '周恩来', '杜平'].filter(
    (i) => part.text.indexOf(i) >= 0,
  );
  if (r.length) return r;
  return ['张春桥'];
}

export async function parse(
  pdfPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const doc = await pdfjsLib.getDocument({
    url: pdfPath,
    cMapPacked: true,
    cMapUrl: './node_modules/pdfjs-dist/cmaps/',
  }).promise;

  const parse_all = async function (
    range: [number, number],
  ): Promise<ParserResult[]> {
    const num_pages = [];
    for (let i = range[0]; i <= range[1]; ++i) {
      num_pages.push(i);
    }
    const parts: PartRaw[] = [];
    const pages = await Promise.all(num_pages.map((i) => doc.getPage(i)));
    let content_objs = await Promise.all(
      pages.map((page) => page.getTextContent()),
    );
    const viewport = pages[0].getViewport({ scale: 1 });
    content_objs.forEach((content_obj, page_idx) => {
      const res = merge_to_lines(
        pdfjsContentToOCRResult(content_obj, viewport.height)
          .map((i) => {
            // 去掉空格块
            i.text = i.text.replace(/ /g, '');
            return i;
          })
          .filter((i) => i.text && i.box[0][1] > 70 && i.box[0][1] < 825), // 去掉页眉页脚
        10,
      );
      const prev = parts[parts.length - 1];
      // if (page_idx + range[0] == 96)debugger;
      parts.push(...extract_parts(res, page_idx + range[0], prev));
    });

    const articles: PartRaw[][] = [];
    for (let i = 0; i < parts.length; ++i) {
      if (parts[i].type === ContentType.title) {
        articles.push([]);
        while (parts[i].type === ContentType.title) {
          parts[i].merge_up = true;
          articles[articles.length - 1].push(parts[i]);
          ++i;
        }
        --i;
        continue;
      } else {
        articles[articles.length - 1].push(parts[i]);
      }
    }

    return articles.map((article) => {
      const merged_parts = merge_parts(article);
      merged_parts.forEach((i) => (i.text = toChineseSymbols(i.text)));
      merged_parts[0].text = merged_parts[0].text.replace(/^\d+\)/, '');
      const title = merged_parts[0].text;
      let date = extract_date(merged_parts[1]);
      let authors = [];
      if (date) {
        authors = extract_authors(merged_parts[1]);
        merged_parts.splice(1, 1);
      } else {
        date = extract_date(merged_parts[2]);
        const a = extract_authors(merged_parts[1]);
        const b = extract_authors(merged_parts[2]);
        authors = a.length > b.length ? a : b;
        merged_parts.splice(1, 2);
      }
      return {
        title,
        parts: merged_parts,
        authors,
        dates: [date!],
        is_range_date: false,
        comments: [],
        comment_pivots: [],
        description: '',
        page_start: article[0].page,
        page_end: article[article.length - 1].page,
        ...(overwrite[title] ? overwrite[title] : {}),
      };
    });
  };

  const parser_results: ParserResult[] = [];
  for (const limit of parser_opt.page_limits) {
    parser_results.push(...(await parse_all(limit)));
  }
  return parser_results;
}

const overwrite: { [key: string]: Partial<ParserResult> } = {
  '张春桥戚本禹与北航“红旗”五名战士谈话': {
    authors: ['张春桥', '戚本禹'],
  },
  张春桥戚本禹接见红卫兵代表时的讲话摘要: {
    authors: ['张春桥', '戚本禹'],
  },
  张春桥在上海市革命造反派座谈会上的讲话: {
    authors: ['张春桥', '姚文元'],
  },
  周恩来对中央广播事业局的电话指示及张春桥姚文元的谈话: {
    authors: ['周恩来', '张春桥', '姚文元'],
  },
};
