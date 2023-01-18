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
  content_min_x: 90,
  page_width: 612,

  page_header_min_y: 630,
  min_space_width: 2.5,
  noramal_char_height: 12,
  header_min_height: 10,
  align_center_threshold: 20,
  sameline_threshold: 10,
  gap_threshold: 20,
  title_threshold: 20,
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
    /^\d\d\d\d\.\d?\d\.\d?\d/.test(i) ||
    (/^[一二三四五六七八九至O○〇十年月日—，、初廿卄卅卌春夏秋冬]+$/.test(i) &&
      /^.*[年月日]+.*/.test(i))
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

function is_title(s: string) {
  return /^\d+\)/.test(s) || /^补遗/.test(s);
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
      if (Math.abs(items[j].transform[5] - offset_y) > opt.sameline_threshold) {
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
          opt.min_space_width
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

  for (let i = 0; i < lines.length; ++i) {
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
    if (is_date(str)) {
      parts.push([str, ContentType.subdate, line.items[0]]);
    } else if (
      line.align_center &&
      (is_title(str) ||
        (prev_line &&
          Math.abs(
            prev_line.items[0].transform[5] - line.items[0].transform[5],
          ) < opt.title_threshold &&
          parts[parts.length - 1][1] == ContentType.title))
    ) {
      parts.push([str, ContentType.title, line.items[0]]);
    } else if (line.items[0].height > opt.noramal_char_height) {
      parts.push([str, ContentType.subtitle, line.items[0]]);
    } else {
      if (/：$/.test(str) && line.max_x < opt.page_width / 2) {
        parts.push([str, ContentType.appellation, line.items[0]]);
      } else {
        parts.push([str, ContentType.paragraph, line.items[0]]);
      }
    }
  }

  for (let i = 0; i < parts.length; ++i) {
    if (
      parts[i][1] === ContentType.subdate &&
      parts[i - 1][1] === ContentType.paragraph &&
      parts[i - 2][1] === ContentType.title
    ) {
      parts[i - 1][1] = ContentType.authors;
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
  for (let i = 1; i < parts.length; ++i) {
    if (parts[i][1] === ContentType.comment) {
      final_parts.push([
        parts[i][0],
        parts[i][1],
        item_to_page.get(parts[i][2]),
        item_to_page.get(parts[i][2]),
      ]);
      continue;
    }
    const prev_offset = 1;
    // 段落碎片合并
    // 标题碎片合并
    if (
      parts[i][1] == parts[i - prev_offset][1] &&
      (parts[i][1] == ContentType.paragraph
        ? item_to_page.get(parts[i][2]) ===
          item_to_page.get(parts[i - prev_offset][2])
          ? Math.abs(
              parts[i][2].transform[5] - parts[i - prev_offset][2].transform[5],
            ) < opt.gap_threshold
          : true
        : true)
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

function extract_dates(s: string): [Date[], boolean] {
  if (s.indexOf('.') >= 0) {
    const x = s.split('.');
    return [
      [
        {
          year: parseInt(x[0]),
          month: parseInt(x[1]),
          day: parseInt(x[2]),
        },
      ],
      false,
    ];
  }
  if (s.length > 30) {
    return [[{ year: undefined }], false];
  }
  if (s.search(/[^\d一二三四五六七八九至，—、O○〇十年月日廿（）]/) >= 0) {
    console.warn('异形日期:', s);
  }
  s = s
    .replace(/[^\d一二三四五六七八九至—，、O○〇十年月日廿卅]/g, '')
    .replace(/卌/g, '四十')
    .replace(/卅/g, '三十')
    .replace(/卅/g, '三十')
    .replace(/，/g, '、')
    .replace(/廿/g, '二十');

  const is_range = s.search(/[至—]+/) >= 0;
  let parts_raw = is_range
    ? s.search(/[至]+/) >= 0
      ? s.split('至')
      : s.split('——')
    : s.split('、');
  const parts: Date[] = [];
  if (parts_raw.length > 1 && s.search(/、/) >= 0) {
    const last = parts_raw[parts_raw.length - 1];
    const unit = last[last.length - 1];
    parts_raw = parts_raw.map((i) => (/[年月日]+$/.test(i) ? i : i + unit));
  }
  parts_raw.forEach((part, idx) => {
    part = part
      .replace(/^十年/g, '10年')
      .replace(/^二十年/g, '20年')
      .replace(/^三十年/g, '30年')
      .replace(/^四十年/g, '40年')
      .replace(/^五十年/g, '50年')
      .replace(/^六十年/g, '60年')
      .replace(/^七十年/g, '70年')
      .replace(/^八十年/g, '80年')
      .replace(/^九十年/g, '90年')
      .replace(/十月/g, '10月')
      .replace(/二十日/g, '20日')
      .replace(/三十日/g, '30日')
      .replace(/十日/g, '10日')
      .replace(/二十/g, '2')
      .replace(/三十/g, '3')
      .replace(/十/g, '1')
      .replace(/一/g, '1')
      .replace(/二/g, '2')
      .replace(/三/g, '3')
      .replace(/四/g, '4')
      .replace(/五/g, '5')
      .replace(/六/g, '6')
      .replace(/七/g, '7')
      .replace(/八/g, '8')
      .replace(/九/g, '9')
      .replace(/[O○〇]+/g, '0');
    const year_raw = part.search(/年/) >= 0 ? part.split('年')[0] : '';
    const month_raw =
      part.search(/月/) >= 0 ? part.replace(/.+年/, '').split('月')[0] : '';
    const day_raw =
      part.search(/日/) >= 0 ? part.replace(/.+月/, '').split('日')[0] : '';
    let year = parseInt(year_raw);
    let month = parseInt(month_raw);
    let day = parseInt(day_raw);
    const last = {
      year: parts[idx - 1] && parts[idx - 1].year,
      month: parts[idx - 1] && parts[idx - 1].month,
      day: parts[idx - 1] && parts[idx - 1].day,
    };
    const res: Date = {
      year: !year || isNaN(year) ? last.year : year,
      month: !month || isNaN(month) ? last.month : month,
      day: !day || isNaN(day) ? last.day : day,
    };
    parts.push(res);
  });

  for (const part of parts) {
    if (part.year && part.year < 200) {
      console.warn('民国日期', s);
      part.year += 1911;
    }
  }
  return [parts, is_range];
}

function parse_authors(s: string) {
  return s.split(' ');
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
    content_objs.forEach((content_obj, page_idx) => {
      content_obj.items.forEach((item, idx) => {
        let prev_idx = idx - 1;
        while (
          content_obj.items[prev_idx] &&
          !content_obj.items[prev_idx].str.trim()
        )
          --prev_idx;
        const prev = content_obj.items[prev_idx];
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
      if (page_idx === 0 && range[0] === 7) {
        sorted.splice(0, 92);
      }

      sorted.forEach((item: any, idx: number) => {
        // 去空格
        if (!item.str.trim()) item.str = '';
        // item.str = item.str.trim(); // replace(/ /g, '');
        item_to_page.set(item, page_idx + range[0]);
        items.push(item);
      });
    });
    const parts_raw = extract_parts(items, item_to_page);
    const articles: ParserResult[] = [];
    for (let i = 0, part_idx = 0; i < parts_raw.length; ++i, ++part_idx) {
      const part = parts_raw[i];
      const next_part = parts_raw[i + 1];
      const nnext_part = parts_raw[i + 2];
      if ((part.type as any) === ContentType.authors) {
        const article = articles[articles.length - 1];
        if (part.page_start === 272 && range[0] === 7) {
          article.authors = ['陈伯达', '江青'];
        } else {
          article.authors = parse_authors(part.text);
        }
        continue;
      }
      if ((part.type as any) === ContentType.subdate) {
        continue;
      }
      if ((part.type as any) === ContentType.title) {
        part_idx = 0;
        const title = part.text
          .replace(/^\d+\) */, '')
          .replace(/^补遗 \d\d：?/, '');
        articles.push({
          title,
          description: '',
          dates: [],
          parts: [{ text: title, type: part.type }],
          comment_pivots: [],
          is_range_date: false,
          authors: [],
          comments: [],
          page_start: Infinity,
          page_end: Infinity,
        });
        if (articles.length === 24 && range[0] === 7) {
          const article = articles[articles.length - 1];
          article.authors.push('江青');
        }
        if (articles.length === 15 && range[0] === 7) {
          const article = articles[articles.length - 1];
          article.authors.push('江青', '李雪峰', '姚文元', '康生');
        }
        if (articles.length === 1 && range[0] === 7) {
          const article = articles[articles.length - 1];
          article.is_range_date = true;
          article.dates.push(
            {
              year: 1966,
              month: 2,
              day: 2,
            },
            {
              year: 1966,
              month: 2,
              day: 20,
            },
          );
          article.authors.push('林彪', '江青');
        }
        if (
          (next_part.type as any) === ContentType.subdate ||
          (nnext_part.type as any) === ContentType.subdate
        ) {
          const article = articles[articles.length - 1];
          const [dates, is_range_date] = extract_dates(
            (nnext_part.type as any) === ContentType.subdate
              ? nnext_part.text
              : next_part.text,
          );
          article.is_range_date = is_range_date;
          article.dates = dates;
        }
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

    for (let i = 0; i < articles.length; ++i) {
      const article = articles[i];
      if (!article.dates.length) {
        console.warn(
          '日期丢失',
          article.title,
          article.page_start,
          article.page_end,
        );
      }
      if (!article.authors.length) {
        console.warn(
          '作者丢失',
          article.title,
          article.page_start,
          article.page_end,
        );
      }
      const temp: { [key: string]: boolean } = {};
      article.comment_pivots.forEach((j) => {
        temp[j.index] = true;
      });
      if (Object.keys(temp).length !== article.comments.length) {
        console.warn(
          '注释不匹配',
          article.title,
          article.page_start,
          article.page_end,
        );
      }
    }

    // TODO origin
    return articles;
  };

  const parser_results = [
    ...(await parse_all(parser_opt.page_limits[0])),
    ...(await parse_all(parser_opt.page_limits[1])),
  ];
  return parser_results;
}
