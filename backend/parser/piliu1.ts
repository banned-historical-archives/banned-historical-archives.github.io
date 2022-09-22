import { join } from 'path';
import { existsSync, writeFileSync, readFileSync } from 'fs';
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
  TagType,
} from '../../types';
import { merge_to_lines } from './utils';

const opt = {};

type PartRaw = { page: number; x: number; merge_up?: boolean } & ContentPartRaw;
function extract_parts(ocr: OCRResult[], page: number): PartRaw[] {
  const res: PartRaw[] = [];
  for (let i = 0; i < ocr.length; ++i) {
    let text = ocr[i].text.trim();
    const x = ocr[i].box[0][0];
    if (text === '张春桥同志') text += '：';
    if (text === '威本寓同志饼') text += '：';
    if (/供你们参考$/.test(text)) {
      res.push(
        {
          page,
          text: text.split('：')[0] + '：',
          x,
          type: ContentType.appellation,
        },
        {
          page,
          text: text.split('：')[1],
          x,
          type: ContentType.paragraph,
        },
      );
      continue;
    }
    res.push({
      page,
      text,
      x,
      type: /[:：]$/.test(text)
        ? ContentType.appellation
        : ContentType.paragraph,
    });
  }
  const paragraphs = res.filter((i) => i.type === ContentType.paragraph);
  for (let i = 0; i < paragraphs.length; ++i) {
    const last = paragraphs[i - 1];
    const next = paragraphs[i + 1];
    const t = paragraphs[i];
    if (page == 3) {
      t.merge_up = true;
      continue;
    }
    if (last && last.x < t.x && t.x - last.x > 50) {
      t.merge_up = false;
    } else if (next && next.x < t.x && t.x - next.x > 50) {
      t.merge_up = false;
    } else if (last && /[:：]$/.test(last.text)) {
      t.merge_up = false;
    } else {
      t.merge_up = true;
    }
  }
  return res;
}

function merge_parts(parts: PartRaw[]): ContentPart[] {
  const res: ContentPart[] = [];
  for (let i = 0; i < parts.length; ++i) {
    if (parts[i].merge_up && res[res.length - 1].type === parts[i].type) {
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
    const ocrResults = merge_to_lines(
      (await ocr({ img: path, resized_shape: 2000 })).ocr_results.filter(
        (i) =>
          i.text.trim() &&
          !/^[-\w\d—“"名全告吃工一\.·，]+$/.test(i.text.trim()),
          // 去页码
      ),
      30
    ).sort((a, b) => a.box[0][1] - b.box[0][1]);

    // 去掉标题和日期
    parts.push(...extract_parts(i === 2 ? ocrResults.slice(4) : ocrResults, i));
  }

  const articles: PartRaw[][] = [];
  parts.unshift({
    text: '陈伯达、张春桥、关峰、戚本禹接见红代会及人民日报、解放军报、红旗杂志负责人的讲话',
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
      authors: ['陈伯达', '张春桥', '关峰', '戚本禹'],
      dates: [
        {
          year: 1967,
          month: 7,
          day: 16,
        },
      ],
      tags: [{ type: TagType.place, name: '旧中宣部礼堂' }],
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
