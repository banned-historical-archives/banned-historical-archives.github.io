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
  page_width: 419.5,
  header_min_height: 12,
  header_min_x: 70,
  content_min_x: 36,
  comment_threshold: 111,
  title_threshold: 25,
  align_center_threshold: 10,
  sameline_threshold: 10,
};

function fix_before_parsing(s: pdfjsLib.ContentObj[], range: [number, number]) {
  return s;
}

function is_date(i: string) {
  return (
    (/^（(手稿）)?（?[一二三四五六七八九至O○〇十年月日—、初廿卄卅卌]+/.test(
      i,
    ) ||
      /^[一二三四五六七八九至O○〇十年月日]+$/.test(i)) &&
    /[年月日]/.test(i)
  );
}

function extract_parts(
  items: Item[],
  item_to_page: Map<Item, number>,
): ({ page_start: number; page_end: number } & ContentPartRaw)[] {
  const parts: [string, ContentType, Item][] = [];
  const lines: {
    items: Item[];
    max_x: number;
    min_x: number;
    offset_y: number;
    align_center: boolean;
    idx: [number, number];
    str: string;
  }[] = [];
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
      offset_x = items[j].transform[4];
      max_x = Math.max(max_x, offset_x + items[j].width);
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
        str,
        min_x: item.transform[4],
        align_center,
      });
    } else {
      lines.push({
        items: [item],
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
    const prev_line = lines[i - 1];
    const next_line = lines[i + 1];
    const { str } = line;
    //字体高度符合 或 （居中 且 上下间距符合）
    if (
      str[str.length - 1] != '。' &&
      (line.items[0].height > opt.header_min_height ||
        (line.align_center &&
          (next_line
            ? Math.abs(line.offset_y - next_line.offset_y) > opt.title_threshold
            : true) &&
          (prev_line
            ? Math.abs(line.offset_y - prev_line.offset_y) > opt.title_threshold
            : true)) ||
        is_date(str))
    ) {
      parts.push([
        str,
        is_date(str)
          ? ContentType.subdate
          : /^（(节录)|(摘录)|(社论)|(节选)/.test(str)
          ? ContentType.subtitle
          : /^（/.test(str) || /^补遗$/.test(str)
          ? ContentType.description
          : ContentType.subtitle,
        line.items[0],
      ]);
    } else {
      parts.push([str, ContentType.paragraph, line.items[0]]);
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
    // 段落碎片合并
    // 标题碎片合并
    if (
      parts[i][1] == parts[i - 1][1] &&
      (parts[i][1] == ContentType.paragraph
        ? parts[i][2].transform[4] == opt.content_min_x
        : true) &&
      (parts[i][1] == ContentType.subdate ? false : true)
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
        type: i[1],
        page_start: i[2]!,
        page_end: i[3]!,
      } as { page_start: number; page_end: number } & ContentPartRaw),
  );
}

function extract_dates(s: string): [Date[], boolean] {
  if (s.length > 30) {
    return [[{ year: undefined }], false];
  }
  if (s.search(/[^\d一二三四五六七八九至—、O○〇十年月日廿（）]/) >= 0) {
    console.warn('异形日期:', s);
  }
  s = s
    .replace(/[^\d一二三四五六七八九至—、O○〇十年月日廿卅]/g, '')
    .replace(/卌/g, '四十')
    .replace(/卅/g, '三十')
    .replace(/卅/g, '三十')
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

export async function parse(
  pdfPath: string,
  opt: ParserOption,
): Promise<ParserResult[]> {
  const doc = await pdfjsLib.getDocument(pdfPath).promise;

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
    let items: Item[] = [];
    const item_to_page = new Map<Item, number>();
    content_objs = fix_before_parsing(content_objs, range);
    content_objs.forEach((content_obj, page_idx) =>
      content_obj.items.forEach((item: any, idx: number) => {
        // 去掉最后一个页码
        if (idx === 0) {
          return;
        }
        if (item.str === '补遗：') {
          return;
        }
        item_to_page.set(item, page_idx + range[0]);
        items.push(item);
      }),
    );
    const parts_raw = extract_parts(items, item_to_page);
    const articles: ParserResult[] = [];
    for (let i = 0; i < parts_raw.length; ++i) {
      const part = parts_raw[i];
      const next_part = parts_raw[i + 1];
      if (part.type === ContentType.subtitle) {
        articles.push({
          title: part.text,
          description: '',
          dates: [],
          parts: [{text: part.text, type: ContentType.title} as ContentPart],
          comment_pivots: [],
          is_range_date: false,
          authors: ['毛泽东'],
          comments: [],
          page_start: Infinity,
          page_end: Infinity,
        });
        if (next_part && next_part.type === ContentType.subdate) {
          const article = articles[articles.length - 1];
          const [dates, is_range_date] = extract_dates(next_part.text);
          article.is_range_date = is_range_date;
          article.dates = dates;
          ++i;
        }
      } else {
        const article = articles[articles.length - 1];
        article.parts.push({ type: part.type, text: part.text });
        article.page_end = part.page_end;
        article.page_start = Math.min(part.page_start, article.page_start);
      }
    }

    let prev_article_year: number;
    for (let i = 0; i < articles.length; ++i) {
      const article = articles[i];
      if (!article.dates.length) {
        console.warn('日期丢失', article.title);
        const date_a = extract_dates(article.parts[0].text)[0][0];
        const date_b = extract_dates(
          article.parts[article.parts.length - 1].text,
        )[0][0];
        if (date_a.year || date_a.month) {
          article.dates = [date_a];
          --i;
        } else if (date_b.year || date_b.month) {
          article.dates = [date_b];
          --i;
        }
      } else if (!article.dates[0].year) {
        console.warn('年份缺失，取上一篇文章的年份', article.title);
        article.dates[0].year = prev_article_year!;
      } else {
        prev_article_year = article.dates[0].year;
      }
    }

    for (let i = 0; i < articles.length; ++i) {
      const article = articles[i];
      if (!article.dates.length) {
        console.warn('日期丢失', article.title);
      }
    }

    // TODO origin
    return articles;
  };

  const parser_results = await parse_all(opt.page_limits[0]);
  return parser_results;
}
