import {join} from 'path';
import {existsSync, writeFileSync, readFileSync} from 'fs';
import ocr from '../ocr';
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

const opt = {
};

type PartRaw = ({ page: number, x: number, merge_up?: boolean } & ContentPartRaw);
function extract_parts(
  ocr: OCRResult[],
  page: number,
): PartRaw[] {
  // 去掉页码
  ocr = ocr.filter(i => !/^[-\d—一\.·，]+$/.test(i.text.trim()));
  const res:PartRaw[] = [];
  for (let i = 0, title_mode = false, title_x = 0; i < ocr.length; ++i) {
    const text = ocr[i].text.trim();
    const x = ocr[i].box[0][0];
    if (title_mode) {
      if (x > title_x + 20) {
        res.push({
          page,
          text,
          merge_up: true,
          x,
          type: ContentType.title,
        });
        continue;
      } else {
        title_mode = false;
      }
    }
    if (/^（[一二三四五六七八九十]+）/.test(text)) {
      title_mode = true;
      title_x = x;
      res.push({
        page,
        x,
        text,
        type: ContentType.title,
      });
      continue;
    }
    res.push({
      page,
      text,
      x,
      type: ContentType.paragraph,
    });
  }
  const paragraphs = res.filter(i => i.type === ContentType.paragraph);
  const min_x = paragraphs.reduce(
    (m, x) => Math.min(m, x.x),
    Infinity,
  );
  const max_x = paragraphs.reduce(
    (m, x) => Math.max(m, x.x),
    -Infinity,
  );
  // 整页无换行
  if (page === 4 || page === 6) {
    paragraphs.forEach((i) => (i.merge_up = true));
  } else {
    paragraphs.filter(x => x.x < 114).forEach(i => i.merge_up = true);
  }
  return res;
}

function merge_parts(parts: PartRaw[]): ContentPart[] {
  const res: ContentPart[] = [];
  for (let i = 0; i < parts.length; ++i) {
    if (parts[i].merge_up) {
      res[res.length - 1].text+=parts[i].text;
    } else {
      res.push({
        type: parts[i].type,
        text: parts[i].text,
      });
    }
  }
  return res;
}

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const parts: PartRaw[] = [];
  for (
    let i = parser_opt.page_limits[0][0];
    i <= parser_opt.page_limits[0][1];
    ++i
  ) {
    const path = imgPath.split('/public/books/')[1] + '/' + i + '.jpg';
    const ocrResults = (await ocr(path)).sort((a, b) => a.box[0][1] - b.box[0][1]);

    parts.push(...extract_parts(i === 1 ? ocrResults.slice(4) : ocrResults, i));
  }
  
  const articles: PartRaw[][] = [];
  parts.unshift({
    text: '王洪文同志在山东重点企业批林批孔汇报会议上的讲话',
    type: ContentType.title,
    x: 0,
    page: 1,
  });
  for (let i = 0; i < parts.length; ++i) {
    if (parts[i].type === ContentType.title) {
      articles.push([]);
      while (parts[i].type === ContentType.title) {
        articles[articles.length - 1].push(parts[i]);
        ++i;
      }
      --i;
      continue;
    } else {
      articles[articles.length - 1].push(parts[i]);
    }
  }

  const res: ParserResult[] = articles.map((article) => {
    const merged_parts = merge_parts(article);
    const title = merged_parts[0].text;
    merged_parts[0].text = title;
    return {
      title,
      parts: merged_parts,
      authors: ['王洪文'],
      dates: [
        {
          year: 1974,
          month: 6,
          day: 27,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: '',
      page_start: article[0].page,
      page_end: article[article.length - 1].page,
    };
  });
  return res;
}
