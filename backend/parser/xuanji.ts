// https://unpkg.com/browse/pdfjs-dist@2.14.305/legacy/build/pdf.js
import * as pdfjsLib from './pdf.js';
import type { Item } from './pdf.js';

import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../types';

const opt = {
  content_min_x: 38,
  page_width: 360,

  page_header_min_y: 630,
  noramal_char_width: 9,
  main_title_min_height: 14,
  main_title_max_height: 30,
  header_min_height: 12,
  title_threshold: 20,
  align_center_threshold: 20,
  sameline_threshold: 10,
  no_indent_threshold: 20,
  comment_threshold: 7,
};

function ensure10digits(x: number) {
  x *= 100000;
  let s = parseInt(x.toString()).toString();
  while (s.length < 10) s= '0'+s;
  return s;
}

function insert_comment(items: pdfjsLib.Item[], j: number, insert_idx: number, comment_str: string) {
  const item = items[j];
  const str_a = item.str.substr(0, insert_idx);
  const str_b = item.str.substr(insert_idx);
  item.str = str_a;
  item.width = item.width / 2;
  const new_transform = [...item.transform];
  new_transform[4] = item.width / 2 + 2 + item.transform[4];
  items.splice(j + 1, 0, {
    ...item,
    transform: [
      0,
      0,
      0,
      0,
      item.transform[4] + item.width / 2 + 1,
      item.transform[5] + item.height - 5,
    ],
    str: comment_str,
    height: 5,
    width: 0.1,
  });
  items.splice(j + 2, 0, {
    ...item,
    transform: new_transform,
    width: item.width / 2 - 2,
    str: str_b,
  });
}
function fix_before_parsing(s: pdfjsLib.ContentObj[], start_page: number, name: string) {
  let p = start_page;
  if (name === 'xuanji1') {
    for (const i of s) {
      if (p === 71) {
        for (let j = 0; j < i.items.length; ++j) {
          const item = i.items[j];
          if (item.str.indexOf('（三）平浏的农民(7)') >= 0) {
            item.str = item.str.replace('(7)', '〔7〕');
          }
        }
      } else if (p === 67) {
        for (let j = 0; j < i.items.length; ++j) {
          const item = i.items[j];
          if (item.str.indexOf('军中组织了士兵委员会') >= 0) {
            insert_comment(i.items, j, item.str.lastIndexOf('。'), '〔3〕');
            j += 2;
          }
        }
      } else if (p === 138) {
        i.items.forEach(
          (x) => (x.str = x.str.replace(/\(/g, '〔').replace(/\)/g, '〕')),
        );
      } else if (
        p === 144 ||
        p === 145 ||
        p === 151 ||
        p === 156 ||
        p === 260 ||
        p === 263 ||
        p === 264 ||
        p === 265
      ) {
        for (let j = 0; j < i.items.length; ++j) {
          let x = i.items[j].str.search(/\(\d/);
          while (x >= 0) {
            const arr = Array.from(i.items[j].str);
            arr[x] = '〔';
            i.items[j].str = arr.join('');
            x = i.items[j].str.search(/\(\d/);
          }
          x = i.items[j].str.search(/\d\)/);
          while (x >= 0) {
            const arr = Array.from(i.items[j].str);
            arr[x + 1] = '〕';
            i.items[j].str = arr.join('');
            x = i.items[j].str.search(/\d\)/);
          }
          if (
            (i.items[j].str === '（' || i.items[j].str === '(') &&
            i.items[j + 1] &&
            /^\d+$/.test(i.items[j + 1].str)
          ) {
            i.items[j].str = '〔';
            i.items[j + 2].str = '〕';
            j += 2;
          } else if (/^[\(（]\d+[\)）]$/.test(i.items[j].str)) {
            i.items[j].str = i.items[j].str
              .replace('(', '〔')
              .replace('（', '〔')
              .replace('）', '〕')
              .replace(')', '〕');
          }
        }
      } else if (p === 162) {
        i.items[12].transform[4] -= 3;
        i.items[12].height -= 3;
        i.items[13].transform[4] -= 3;
        i.items[14].transform[4] -= 3;
      }
      p++;
    }
  } else if (name === 'xuanji2') {
    for (const i of s) {
      if (p === 40) {
        i.items[36].str = i.items[36].str.replace('〔', '');
        i.items[39].str =
          '〔' + i.items[37].str + i.items[38].str + i.items[39].str;
        i.items[37].str = '';
        i.items[38].str = '';
      } else if (p === 67) {
        i.items[3].str = i.items[0].str + i.items[1].str + i.items[3].str;
        i.items[0].str = '';
        i.items[1].str = '';
      } else if (p === 157) {
        i.items.forEach((j) => (j.str = j.str.replace(/\(20\)/, '〔20〕')));
      } else if (p === 315) {
        i.items.forEach((j) => (j.str = j.str.replace(/\(1\)/, '〔1〕')));
      } else if (p === 344) {
        i.items.forEach((j) => (j.str = j.str.replace(/\(11\)/, '〔11〕')));
      } else if (p === 419) {
        i.items.forEach((j) => (j.str = j.str.replace(/\(2\)/, '〔2〕')));
      } else if (p === 441) {
        i.items[25].str = '';
        i.items[26].str = '';
        i.items[27].str = '';
        i.items[29].str = '8';
      }
      p++;
    }
  } else if (name === 'xuanji3') {
    for (const i of s) {
      if (p === 25 || p === 327) {
        i.items.forEach((j) => (j.str = j.str.replace(/\(1\)/, '〔1〕')));
      } else if (p === 167) {
        i.items[0].str = '';
        i.items[3].str = '（一九四五年四月二十日）';
        i.items[4].str = '';
      }
      p++;
    }
  } else if (name === 'xuanji4') {
    for (const i of s) {
      if (p === 383) {
        i.items.forEach((j) => (j.str = j.str.replace(/\(1\)/, '〔1〕')));
      }
      if (p === 29) {
        i.items.forEach((j) => {
          if (j.str.startsWith('关于制止内战的六项主张')) {
            j.str = '*'+j.str;
          }
        });
      }
      p++;
    }
  } else if (name === 'xuanji5') {
    for (const i of s) {
      i.items.forEach((j) => {
        j.str = j.str
          .replace(/\[/g, '〔')
          .replace(/\]/g, '〕')
          .replace(/［/g, '〔');
      });
      if (p === 230) {
        i.items.forEach((j) => {
          j.str = j.str.replace(/（/g, '〔').replace(/）/g, '〕');
        });
      } else if (p === 272) {
        i.items.forEach((j) => {
          j.str = j.str.replace(/（1）/g, '〔1〕').replace(/（2）/g, '〔2〕').replace(/（3）/g, '〔3〕');
        });
      } else if (p === 468) {
        i.items.forEach((j) => {
          j.str = j.str.replace(/〔1）/g, '〔1〕').replace(/〔2）/g, '〔2〕');
        });
      }
      p++;
    }
  }
  return s;
}

function is_date(i: string) {
  return (
    /^（[一二三四五六七八九至O○〇十年月日—，、初廿卄卅卌春夏秋冬]+）/.test(
      i,
    ) &&
    /^（.*[年月日]+.*）/.test(i)
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
    line.str.replace(/ /g, '') !== '序' &&
    line.str.replace(/ /g, '') !== '序言' &&
    line.str.replace(/ /g, '') !== '引言' &&
    line.str.replace(/ /g, '') !== '结论' &&
    line.str.replace(/ /g, '') !== '序言一' &&
    line.str.replace(/ /g, '') !== '序言二' &&
    line.str.replace(/ /g, '') !== '开幕词' &&
    line.str.replace(/ /g, '') !== '按语（选辑）' &&
    line.str.replace(/ /g, '') !== '跋' &&
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
  let title_has_star = false;
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
      if (j > i && offset_x - (items[j - 1].transform[4] + items[j - 1].width) > opt.noramal_char_width) {
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

  for (let i = 0, is_in_comments_context = false; i < lines.length; ++i) {
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

    // if (str.indexOf('*') >= 0) debugger

    if (str.startsWith('*') && title_has_star) {
      let j = i;
      let s = '';
      while (item_to_page.get(lines[j].items[0]) === item_to_page.get(line.items[0])) {
        s += lines[j].str;
        ++j;
      }
      parts.push([s, ContentType.description, line.items[0]]);
      i = j -1;
      continue;
    }
    if (is_date(str)) {
      parts.push([str, ContentType.subdate, line.items[0]]);
    } else if (
      line.items[0].height > opt.header_min_height
    ) {
      if (is_title(line)) {
        let j = i;
        let s = '';
        while (
          lines[j] &&
          lines[j].items[0].height > opt.header_min_height &&
          !is_date(lines[j].str)
        ) {
          s += lines[j].str;
          ++j;
        }
        let temp = Array.from(s);
        for (const x of Array.from(s.matchAll(/\(\d+\)/g))) {
          temp[(x as any).index] = '〔';
          temp[(x as any).index + (x as any)[0].length - 1] = '〕';
        }
        s = temp.join('');
        title_has_star = is_date(lines[j].str) ? s.indexOf('*') >= 0 : title_has_star;
        parts.push([s, is_date(lines[j].str) ? ContentType.title : ContentType.subtitle, line.items[0]]);
        i = j - 1;
      } else {
        parts.push([str, ContentType.subtitle, line.items[0]]);
      }
    } else {
      if (
        /：$/.test(str) &&
        line.max_x < opt.page_width / 2 &&
        parts[parts.length - 1][1] === ContentType.subdate
      ) {
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
    if (parts[i][0] === '注释') {
      last_one_is_comment = true;
      continue;
    }
    if (parts[i][1] === ContentType.comment) {
      final_parts.push([
        parts[i][0],
        parts[i][1],
        item_to_page.get(parts[i][2]),
        item_to_page.get(parts[i][2]),
      ]);
      continue;
    }
    let prev_offset = last_one_is_comment ? 2 : 1;
    const prev_idx = parts[i-1][1] === ContentType.description ? i - 2 : i - 1;
    const final_prev_idx =
      final_parts[final_parts.length - 1] &&
      final_parts[final_parts.length - 1][1] === ContentType.description
        ? final_parts.length - 2
        : final_parts.length - 1;

        if (

      final_parts[final_parts.length - 1] &&
      final_parts[final_parts.length - 1][1] === ContentType.description
        ){
          // debugger
        }
    // 段落碎片合并
    // 标题碎片合并
    // 角注向前合并
    if (/^〔\d+〕$/.test(parts[i][0])) {
      final_parts[final_parts.length - prev_offset][0] += parts[i][0];
      continue;
    }
    if (
      parts[i][1] == parts[prev_idx][1] &&
      (parts[i][1] == ContentType.paragraph
        ? parts[i][2].transform[4] < opt.content_min_x + opt.no_indent_threshold
        : true) &&
      (parts[i][1] == ContentType.subdate ? false : true)
    ) {
      if (parts[i][0]) final_parts[final_prev_idx][0] += parts[i][0];
      final_parts[final_prev_idx][3] = item_to_page.get(parts[i][2]);
    } else if (
      parts[i][1] === ContentType.subtitle &&
      parts[i - prev_offset][1] === ContentType.title
    ) {
      if (parts[i][0]) final_parts[final_prev_idx][0] += parts[i][0];
      final_parts[final_prev_idx][3] = item_to_page.get(parts[i][2]);
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

function extract_pivots(s: string, part_idx: number): [Pivot[], string] {
  const res: Pivot[] = [];
  while (true) {
    const idx = s.search(/〔 *\d+ *〕/);
    if (idx == -1) {
      break;
    }
    const index = parseInt(s.match(/〔 *\d+ *〕/)![0].substr(1));
    s = s.replace(/〔 *\d+ *〕/, '');
    res.push({ part_idx, offset: idx, index });
  }
  return [res, s];
}

export async function parse(
  pdfPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  if (parser_opt.header_min_height) {
    opt.header_min_height = parser_opt.header_min_height;
  }

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
    const viewport = pages[0].getViewport({scale:1});
    const width = viewport.viewBox[2];
    const height = viewport.viewBox[3];
    const items: Item[] = [];
    const item_to_page = new Map<Item, number>();
    content_objs = fix_before_parsing(content_objs, range[0], parser_opt.name!);
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
        // if (page_idx+ range[0]=== 71) debugger;
      if (page_idx === 0) {
        const first_title_idx = sorted.findIndex(
          (i) =>
            i.height > opt.main_title_min_height &&
            i.height < opt.main_title_max_height,
        );
        page_header_min_y = sorted[first_title_idx - 1].transform[5] - 20;
      }

      // if (page_idx + range[0] === 279) debugger;
      sorted.forEach((item: any, idx: number) => {
        // 去掉页码以及页眉
        if (item.transform[5] > page_header_min_y) return;
        // 去掉水印
        if (item.str.indexOf('www.mzdbl.cn') >= 0) {
          return;
        }
        // 去空格
        item.str = item.str
          .replace(/ /g, '')
          .replace(/︹/g, '〔')
          .replace(/︺/g, '〕');
          /*
          .replace(/⑴/g, '〔1〕')
          .replace(/⑵/g, '〔2〕')
          .replace(/⑶/g, '〔3〕')
          .replace(/⑷/g, '〔4〕')
          .replace(/⑸/g, '〔5〕')
          .replace(/⑹/g, '〔6〕')
          .replace(/⑺/g, '〔7〕')
          .replace(/⑻/g, '〔8〕')
          .replace(/⑼/g, '〔9〕')
          .replace(/⑽/g, '〔10〕')
          .replace(/⑾/g, '〔11〕')
          .replace(/⑿/g, '〔12〕')
          .replace(/⒀/g, '〔13〕')
          .replace(/⒁/g, '〔14〕')
          .replace(/⒂/g, '〔15〕')
          .replace(/⒃/g, '〔16〕')
          .replace(/⒄/g, '〔17〕')
          .replace(/⒅/g, '〔18〕')
          .replace(/⒆/g, '〔19〕')
          .replace(/⒇/g, '〔20〕');*/
          if (item.height < opt.comment_threshold) {
            item.str = item.str
              .replace('(', '〔')
              .replace(')', '〕')
              .replace('（', '〔')
              .replace('）', '〕')
              .replace('[', '〔')
              .replace(']', '〕')
              .replace(/１/g, '1')
              .replace(/２/g, '2')
              .replace(/３/g, '3')
              .replace(/４/g, '4');
          }


        item_to_page.set(item, page_idx + range[0]);
        items.push(item);
      });
    });
    const parts_raw = extract_parts(items, item_to_page);
    const articles: ParserResult[] = [];
    let description = '';
    for (let i = 0, part_idx = 0; i < parts_raw.length; ++i, ++part_idx) {
      const part = parts_raw[i];
      const next_part = parts_raw[i + 1];
      if (part.type === ContentType.title) {
        part_idx = 0;
        let [cur_pivots, title] = extract_pivots(part.text.replace(/ /g, ''), part_idx);
        const parts:ContentPart[] = [];
        if (/\*/.test(title) && !/\*$/.test(title)) {
          title = title.split('*')[0];
          parts.push(
            { text: title, type: part.type },
            {
              text: title.split('*')[0].substr(1),
              type: ContentType.subtitle,
            },
          );
        } else {
          title = title.replace(/\*/, '');
          parts.push({ text: title, type: part.type });
        }
        if (articles.length) {
          articles[articles.length -1].description = description;
        }
        description = '';
        articles.push({
          title,
          description:
            parser_opt.name === 'xuanji3' && title === '关于若干历史问题的决议'
              ? '一九四五年四月二十日中国共产党第六届中央委员会扩大的第七次全体会议通过'
              : '',
          dates: [],
          parts,
          comment_pivots: [...cur_pivots],
          is_range_date: false,
          authors: [
            parser_opt.name === 'xuanji3' && title === '关于若干历史问题的决议'
              ? '中央'
              : '毛泽东',
          ],
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
      } else if (part.type === ContentType.comment) {
        articles[articles.length - 1].comments.push(part.text.replace(/^〔\d+〕 */, ''))
      } else if (part.type === ContentType.description) {
        description += description ? part.text : part.text.substr(1);
      } else {
        const article = articles[articles.length - 1];
        const [cur_pivots, text] = extract_pivots(part.text, part_idx);
        article.parts.push({ type: part.type, text });
        article.comment_pivots.push(...cur_pivots);
        article.page_end = part.page_end;
        article.page_start = Math.min(part.page_start, article.page_start);
      }
    }
    if (description) {
      articles[articles.length - 1].description = description;
    }

    for (let i = 0; i < articles.length; ++i) {
      const article = articles[i];
      if (!article.dates.length) {
        console.warn('日期丢失', article.title, article.page_start, article.page_end);
      }
      if (article.page_end == Infinity || article.page_start == Infinity) {
        console.warn('页码丢失', article.title, article.page_start, article.page_end);
      }
      const temp: {[key:string]:boolean} = {};
      article.comment_pivots.forEach(j => {
        temp[j.index]=true;
      });
      if (Object.keys(temp).length !== article.comments.length) {
        console.warn('注释不匹配', article.title, article.page_start, article.page_end);
      }
      article.parts = article.parts.filter(x => x.type !== ContentType.description);
    }

    // TODO origin
    return articles;
  };

  const parser_results = await parse_all(parser_opt.page_limits[0]);
  return parser_results;
}
