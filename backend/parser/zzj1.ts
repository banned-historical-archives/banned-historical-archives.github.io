// https://unpkg.com/browse/pdfjs-dist@2.14.305/legacy/build/pdf.js
import * as pdfjsLib from './pdf.js';
import type { Item } from './pdf.js';

import {
  ContentPart,
  ContentPartRaw,
  Date,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../types';

export enum ContentType {
  authors = 'authors',
  appellation = 'appellation',
  title = 'title',
  subtitle = 'subtitle',
  subdate = 'subdate',
  description = 'description',
  paragraph = 'paragraph',
  quotation = 'quotation',
  comment = 'comment',
}

const opt = {
  content_min_x: 76,
  page_width: 508 + 76,

  page_header_min_y: 630,
  noramal_char_width: 9,
  main_title_min_height: 19,
  main_title_max_height: 23,
  header_min_height: 10,
  title_threshold: 20,
  align_center_threshold: 20,
  sameline_threshold: 10,
  no_indent_threshold: 20,
};

function ensure10digits(x: number) {
  x *= 100000;
  let s = parseInt(x.toString()).toString();
  while (s.length < 10) s = '0' + s;
  return s;
}

function fix_before_parsing(s: pdfjsLib.ContentObj[], range: [number, number]) {
  return s;
}

function is_date(i: string) {
  return (
    /^（?[一二三四五六七八九至O○〇十年月日—，、初廿卄卅卌春夏秋冬]+）/.test(
      i,
    ) && /^（.*[年月日]+.*）/.test(i)
  );
}

type Line = {
  items: Item[];
  max_x: number;
  page: number;
  min_x: number;
  offset_y: number;
  align_center: boolean;
  idx: [number, number];
  str: string;
};

function is_title(line: Line) {
  return (
    line.items[0].height > opt.main_title_min_height &&
    line.items[0].height < opt.main_title_max_height &&
    !/^（[一二三四五六七八九十]+）/.test(line.str) &&
    !/^[一二三四五六七八九十]+$/.test(line.str)
  );
}

function extract_parts(
  items: Item[],
  item_to_page: Map<Item, number>,
): ({ page_start: number; page_end: number } & ContentPartRaw)[] {
  const parts: [string, ContentType, Item][] = [];
  const lines: Line[] = [];
  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    if (item.str == '') continue;

    // 行合并
    const candidates = [];
    let j = i;
    let offset_y = item.transform[5];
    let offset_x = item.transform[4];
    let max_x = offset_x + item.width;
    while (items[j] && items[j].transform[4] >= offset_x) {
      if (items[j].line_id! !== item.line_id!) {
        break;
      }
      if (item_to_page.get(items[j]) !== item_to_page.get(item)) {
        break;
      }
      offset_x = items[j].transform[4];
      max_x = Math.max(max_x, offset_x + items[j].width);
      if (
        j > i &&
        offset_x - (items[j - 1].transform[4] + items[j - 1].width) >
          opt.noramal_char_width
      ) {
        items[j].str = ' ' + items[j].str;
      }
      candidates.push(items[j]);
      ++j;
    }
    const align_center =
      Math.abs((item.transform[4] + max_x) / 2 - opt.page_width / 2) <
      opt.align_center_threshold;
    const str = candidates.length
      ? candidates.map((i) => i.str).join('')
      : item.str;
    if (candidates.length) {
      lines.push({
        items: candidates,
        idx: [i, j - 1],
        max_x,
        offset_y,
        page: item_to_page.get(item)!,
        str,
        min_x: item.transform[4],
        align_center,
      });
    } else {
      lines.push({
        items: [item],
        page: item_to_page.get(item)!,
        max_x: item.transform[4] + item.width,
        min_x: item.transform[4],
        idx: [i, i],
        offset_y,
        str,
        align_center,
      });
    }
    if (j > i) i = j - 1;
  }

  for (let i = 1, is_in_comments_context = false; i < lines.length; ++i) {
    const line = lines[i];
    const prev_line =
      lines[i - 1] && lines[i - 1].page === line.page
        ? lines[i - 1]
        : undefined;
    const next_line =
      lines[i + 1] && lines[i + 1].page === line.page
        ? lines[i + 1]
        : undefined;
    const { str } = line;
    if (str.replace(/ /g, '') === '注释') {
      parts.push(['注释', ContentType.comment, line.items[0]]);
      is_in_comments_context = true;
      continue;
    }
    if (is_in_comments_context) {
      // if (item_to_page.get(line.items[0]) === 77)debugger;
      if (/^〔\d+〕/.test(str) && !/注$/.test(parts[parts.length - 1][0])) {
        parts.push([str, ContentType.comment, line.items[0]]);
        continue;
      } else if (is_title(line)) {
        is_in_comments_context = false;
      } else {
        parts[parts.length - 1][0] += str;
        continue;
      }
    }
    if (is_date(str) && line.align_center) {
      parts.push([str, ContentType.subdate, line.items[0]]);
    } else if (
      str[str.length - 1] != '。' &&
      (line.items[0].height > opt.header_min_height ||
        (line.align_center &&
          (next_line
            ? Math.abs(line.offset_y - next_line.offset_y) > opt.title_threshold
            : true) &&
          (prev_line
            ? Math.abs(line.offset_y - prev_line.offset_y) > opt.title_threshold
            : true)))
    ) {
      if (is_title(line)) {
        parts.push([str, ContentType.title, line.items[0]]);
      } else {
        if (/[：:]$/.test(str.trim()) && line.max_x < opt.page_width / 2) {
          parts.push([str, ContentType.appellation, line.items[0]]);
        } else {
          parts.push([str, ContentType.paragraph, line.items[0]]);
        }
      }
    } else {
      if (/[：:]$/.test(str.trim()) && line.max_x < opt.page_width / 2) {
        parts.push([str, ContentType.appellation, line.items[0]]);
      } else {
        parts.push([str, ContentType.paragraph, line.items[0]]);
      }
    }
  }

  const final_parts: [string, ContentType, number?, number?][] = [
    [
      parts[0][0],
      parts[0][1],
      item_to_page.get(parts[0][2]),
      item_to_page.get(parts[0][2]),
    ],
  ];
  for (let i = 1, last_one_is_comment = false; i < parts.length; ++i) {
    const prev_offset = 1;
    // 段落碎片合并
    // 标题碎片合并
    // 角注向前合并
    if (/^〔\d+〕$/.test(parts[i][0])) {
      final_parts[final_parts.length - 1][0] += parts[i][0];
      continue;
    }
    if (
      parts[i][1] == parts[i - prev_offset][1] &&
      (parts[i][1] == ContentType.paragraph
        ? parts[i][2].transform[4] < opt.content_min_x + opt.no_indent_threshold
        : true) &&
      (parts[i][1] == ContentType.subdate ? false : true)
    ) {
      if (parts[i][0]) final_parts[final_parts.length - 1][0] += parts[i][0];
      final_parts[final_parts.length - 1][3] = item_to_page.get(parts[i][2]);
    } else if (
      parts[i][1] === ContentType.subtitle &&
      parts[i - prev_offset][1] === ContentType.title
    ) {
      if (parts[i][0]) final_parts[final_parts.length - 1][0] += parts[i][0];
      final_parts[final_parts.length - 1][3] = item_to_page.get(parts[i][2]);
    } else {
      final_parts.push([
        parts[i][0],
        parts[i][1],
        item_to_page.get(parts[i][2]),
        item_to_page.get(parts[i][2]),
      ]);
    }
    last_one_is_comment = false;
  }
  return final_parts.map(
    (i) =>
      ({
        text: i[0] as string,
        type: i[1] as any,
        page_start: i[2]!,
        page_end: i[3]!,
      } as { page_start: number; page_end: number } & ContentPartRaw),
  );
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
    const pages = await Promise.all(num_pages.map((i) => doc.getPage(i)));
    let content_objs = await Promise.all(
      pages.map((page) => page.getTextContent()),
    );
    const viewport = pages[0].getViewport({ scale: 1 });
    const width = viewport.viewBox[2];
    const height = viewport.viewBox[3];
    const items: Item[] = [];
    const item_to_page = new Map<Item, number>();
    content_objs = fix_before_parsing(content_objs, range);
    let page_header_min_y = 0;
    content_objs.forEach((content_obj, page_idx) => {
      content_obj.items.forEach((item, idx) => {
        let prev_idx = idx - 1;
        while (
          content_obj.items[prev_idx] &&
          !content_obj.items[prev_idx].str.trim()
        )
          --prev_idx;
        const prev = content_obj.items[prev_idx];
        // if (item_to_page.get(line.items[0]) === 233)debugger;
        if (
          prev &&
          Math.abs(
            prev.transform[5] + prev.height - (item.height + item.transform[5]),
          ) < opt.sameline_threshold
        ) {
          item.transform[5] = prev.transform[5] + prev.height - item.height;
        }
      });
      const sorted = content_obj.items
        .map((i) => {
          const line_id = ensure10digits(
            Math.round(height - (i.transform[5] + i.height)),
          );
          return {
            sort_helper: `${line_id}-${ensure10digits(i.transform[4])}`,
            line_id,
            ...i,
          };
        })
        .sort((a, b) =>
          (a as any).sort_helper > (b as any).sort_helper ? 1 : -1,
        );
      // if (page_idx + range[0] === 279) debugger;
      sorted.forEach((item: any, idx: number) => {
        // 去掉页码以及页脚
        if (item.transform[5] < 82) return;
        // 去空格
        item.str = item.str.replace(/ /g, '');
        item.str = item.str.replace(/︹/g, '〔');
        item.str = item.str.replace(/︺/g, '〕');
        item_to_page.set(item, page_idx + range[0]);
        items.push(item);
      });
    });
    const parts_raw = extract_parts(items, item_to_page);
    const articles: ParserResult[] = [];
    for (let i = 0, part_idx = 0; i < parts_raw.length; ++i, ++part_idx) {
      const part = parts_raw[i];
      const next_part = parts_raw[i + 1];
      if ((part.type as any) === ContentType.title) {
        part_idx = 0;
        const title = part.text;
        articles.push({
          title,
          description: '',
          dates: [
            {
              year: 1976,
              month: 7,
              day: 30,
            },
          ],
          parts: [{ text: title, type: part.type }],
          comment_pivots: [],
          is_range_date: false,
          authors: ['华国峰', '王洪文'],
          comments: [],
          page_start: Infinity,
          page_end: Infinity,
        });
      } else if ((part.type as any) === ContentType.comment) {
        articles[articles.length - 1].comments.push(
          part.text.replace(/^〔\d+〕 */, ''),
        );
      } else {
        const article = articles[articles.length - 1];
        article.parts.push({ type: part.type, text: part.text });
        article.page_end = part.page_end;
        article.page_start = Math.min(part.page_start, article.page_start);
      }
    }

    return articles;
  };

  const parser_results = await parse_all(parser_opt.page_limits[0]);
  return parser_results;
}
