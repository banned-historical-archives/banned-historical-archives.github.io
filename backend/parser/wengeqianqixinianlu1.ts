// https://unpkg.com/browse/pdfjs-dist@2.14.305/legacy/build/pdf.js
import * as pdfjsLib from './pdf.js';

import {
  ArticleType,
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../types';
import { merge_to_lines, pdfjsContentToOCRResult } from './utils';

type PartRaw = {
  page: number;
  merge_up?: boolean;
} & ContentPartRaw;

function merge_parts(parts: PartRaw[]): ContentPart[] {
  const res: ContentPart[] = [];
  for (let i = 0; i < parts.length; ++i) {
    if (parts[i].merge_up) {
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
          }).filter((i) => i.text && i.box[0][1] < 788), // 去掉页眉页脚
        10,
      );
      const idx = res.findIndex(i => /^第[一二三四五六七八九十]+卷/.test(i.text));
      const prev = parts[parts.length - 1];
      if (idx < 0) {
        parts.push(...res.map(i => ({
          merge_up: i.box[0][0] < 110,
          page: page_idx + range[0],
          type: ContentType.paragraph,
          text: i.text,
        })))
      } else {
        parts.push(...res.slice(0, idx).map(i => ({
          merge_up: i.box[0][0] < 110,
          page: page_idx + range[0],
          type: ContentType.paragraph,
          text: i.text,
        })),
        {
          merge_up: false,
          type: ContentType.title,
          page: page_idx + range[0],
          text: res[idx].text
        },...res.slice(idx + 1).map(i => ({
          merge_up: i.box[0][0] < 110,
          page: page_idx + range[0],
          type: ContentType.paragraph,
          text: i.text,
        })))
      }
    });

    const articles: PartRaw[][] = [];
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
        if (articles[articles.length - 1])
        articles[articles.length - 1].push(parts[i]);
      }
    }

    return articles.map((article) => {
      const merged_parts = merge_parts(article);
      const title = merged_parts[0].text.split('卷')[0] + '卷';
      return {
        title,
        parts: merged_parts,
        authors: ['周良霄','顾菊英'],
        dates: [{year: 2008}],
        is_range_date: false,
        comments: [],
        comment_pivots: [],
        description: '',
        page_start: article[0].page,
        page_end: article[article.length - 1].page,
      };
    });
  };

  const parser_results: ParserResult[] = [];
  for (const limit of parser_opt.page_limits) {
    parser_results.push(...(await parse_all(limit)));
  }
  return parser_results;
}
