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
  page_width: 595.2756,
  header_min_x: 104,
  content_min_x: 72,
  comment_min_x: 72,
  comment_threshold: 111,
  subscript_threshold: 14,
  align_center_threshold: 20,
  sameline_threshold: 10,
};

function fix_before_parsing(s: pdfjsLib.ContentObj[], range: [number, number]) {
  if (range[0] == 637 && range[1] == 638) {
    for (let i = 4; i < s[0].items.length; ++i) {
      if (s[0].items[i].str === '*') {
        s[0].items.splice(i - 1, 3);
        break;
      }
    }
  }
  return s;
}

function has_date(i: string) {
  return (
    /（[一二三四五六七八九至O○〇十年月日—、]+） ?/.test(i) &&
    /[年月日]+/.test(i)
  );
}
function is_date(i: string) {
  return (
    /^（[一二三四五六七八九至O○〇十年月日—、]+） ?$/.test(i) &&
    /[年月日]+/.test(i)
  );
}

function extract_header(
  items: Item[],
  raw: string,
): [Item[], Item[], string, string] {
  let idx = 0;
  const candidates = [];
  while (
    items[idx] &&
    (items[idx].transform[4] > opt.header_min_x ||
      is_date(items[idx].str) ||
      !items[idx].str)
  ) {
    candidates.push(items[idx]);
    if (
      items[idx].str == '*' &&
      items[idx + 2] &&
      !/^（/.test(items[idx + 2].str) &&
      items[idx + 1].str == ''
    ) {
      ++idx;
      break;
    }
    // 遇到第一个日期结束
    if (/[年月日]+） ?$/.test(items[idx].str)) {
      break;
    }
    ++idx;
  }
  return [
    candidates,
    items.slice(candidates.length),
    candidates.map((i) => i.str).join(''),
    raw.substr(candidates.reduce((m, i) => m + i.str.length + 1, 0)),
  ];
}

function extract_title_date(header: string) {
  const date_a = header.lastIndexOf('（');
  const date_b = header.lastIndexOf('）');
  const date = header.substr(date_a, date_b);
  return [date ? header.substr(0, date_a) : header, date];
}

function extract_content(s: string) {
  const t = '\n注\n \n释\n';
  const idx = s.indexOf(t);
  if (idx >= 0) {
    return [s.substr(0, idx), s.substr(idx + t.length)];
  }
  return [s, ''];
}

function extract_parts(raw_items: Item[]): ContentPartRaw[] {
  let items;
  // 取出正文
  for (let i = 0; i < raw_items.length; ++i) {
    if (
      raw_items[i].str === '注' &&
      raw_items[i + 1].str === ' ' &&
      raw_items[i + 2].str === '释'
    ) {
      items = raw_items.splice(0, i);
      break;
    }
  }
  if (!items) {
    items = raw_items;
  }

  const parts: [string, ContentType, Item?][] = [];
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

    // 居中
    if (
      item.transform[4] > opt.header_min_x &&
      Math.abs((item.transform[4] + max_x) / 2 - opt.page_width / 2) <
        opt.align_center_threshold
    ) {
      const str = candidates.map((i) => i.str).join('');
      parts.push([
        str,
        is_date(str) ? ContentType.subdate : ContentType.subtitle,
      ]);
      if (j > i) i = j - 1;
    } else {
      if (candidates.length) {
        parts.push([
          candidates.map((i) => i.str).join(''),
          ContentType.paragraph,
          item,
        ]);
        if (j > i) i = j - 1;
      } else {
        parts.push([item.str, ContentType.paragraph, item]);
      }
    }
  }

  const final_parts = [[parts[0][0], parts[0][1]]];
  for (let i = 1; i < parts.length; ++i) {
    // 段落碎片合并
    if (
      parts[i][1] == parts[i - 1][1] &&
      (parts[i][2] ? parts[i][2]!.transform[4] == opt.content_min_x : true)
    ) {
      final_parts[final_parts.length - 1][0] += parts[i][0];
    } else {
      final_parts.push([parts[i][0], parts[i][1]]);
    }
  }
  return final_parts.map(
    (i) =>
      ({
        text: i[0] as string,
        type: i[1],
      } as ContentPartRaw),
  );
}

function extract_comments(items: Item[]) {
  let comment_items: Item[] = [];
  for (let i = 0; i < items.length; ++i) {
    if (
      items[i].str == '注' &&
      items[i + 1] &&
      items[i + 1].str == ' ' &&
      items[i + 2] &&
      items[i + 2].str == '释'
    ) {
      comment_items = items.splice(i + 3);
      break;
    }
  }
  const parts: { text: string; mergeUp?: boolean }[][] = [];
  const final_parts: string[][] = [];
  let has_star = false;

  for (let i = 0; i < comment_items.length; ++i) {
    const item = comment_items[i];
    if (item.str == '') continue;

    const candidates = [];
    let j = i;
    let offset_y = item.transform[5];
    let offset_x = item.transform[4];
    let max_x = offset_x + item.width;
    while (comment_items[j] && comment_items[j].transform[4] >= offset_x) {
      if (
        Math.abs(comment_items[j].transform[5] - offset_y) >
        opt.sameline_threshold
      ) {
        break;
      }
      offset_x = comment_items[j].transform[4];
      max_x = Math.max(max_x, offset_x + comment_items[j].width);
      candidates.push(comment_items[j]);
      ++j;
    }

    const str = candidates.map((i) => i.str).join('');
    if (item.str === '*' && !has_star) {
      has_star = true;
      parts.push([{ text: str.substr(1).trim() }]);
      if (j > i) i = j - 1;
    } else if (
      /^〔\d+〕/.test(str) &&
      (comment_items[i - 1] ? !/注$/.test(comment_items[i - 1].str) : true) &&
      parseInt(comment_items[i + 1].str) ===
        (has_star ? parts.length : parts.length + 1)
    ) {
      parts.push([
        {
          text: str.replace(/^〔\d+〕/, ''),
          mergeUp: item.transform[4] == opt.comment_min_x,
        },
      ]);
      if (j > i) i = j - 1;
    } else {
      parts[parts.length - 1].push({
        text: str,
        mergeUp: item.transform[4] == opt.comment_min_x,
      });
      if (j > i) i = j - 1;
    }
  }

  for (const part of parts) {
    final_parts.push([]);
    for (let i = part.length - 1; i >= 0; --i) {
      if (part[i].mergeUp) {
        part[i - 1].text += part[i].text;
      } else {
        final_parts[final_parts.length - 1].unshift(part[i].text);
      }
    }
  }
  return { has_star, comments: final_parts.map((i) => i.join('\n')) };
}

function extract_pivots(s: string, part_idx: number): [Pivot[], string] {
  const res: Pivot[] = [];
  while (true) {
    const idx = s.search(/〔\d+〕/);
    if (idx == -1) {
      break;
    }
    const index = parseInt(s.match(/〔\d+〕/)![0].substr(1));
    s = s.replace(/〔\d+〕/, '');
    res.push({ part_idx, offset: idx, index });
  }
  return [res, s];
}

function extract_dates(s: string): [Date[], boolean] {
  s = s.replace(/^（/, '');
  s = s.replace(/）$/, '');
  if (s.search(/年/) == -1) {
    debugger;
  }

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
    if (year < 1900) year = NaN;
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
  return [parts, is_range];
}

export async function parse(pdfPath: string, opt: ParserOption): Promise<ParserResult[]> {
  const doc = await pdfjsLib.getDocument(pdfPath).promise;

  const parse_article = async function (
    range: [number, number],
  ): Promise<ParserResult | undefined> {
    const num_pages = [];
    for (let i = range[0]; i <= range[1]; ++i) {
      num_pages.push(i);
    }
    const pages = await Promise.all(num_pages.map((i) => doc.getPage(i)));
    let content_objs = await Promise.all(
      pages.map((page) => page.getTextContent()),
    );
    const strings: string[] = [];
    let items: Item[] = [];
    content_objs = fix_before_parsing(content_objs, range);
    content_objs.forEach((content_obj) =>
      content_obj.items.forEach((item: any, idx: number) => {
        // 去掉最后一个页码
        if (
          idx === content_obj.items.length - 1 ||
          idx === content_obj.items.length - 2
        ) {
          return;
        }
        items.push(item);
        strings.push((item as any).str);
      }),
    );
    let raw, title_raw, date_raw, header_raw, header_items, content_raw;
    raw = strings.join('\n');

    [header_items, items, header_raw, raw] = extract_header(items, raw);
    [title_raw, date_raw] = extract_title_date(header_raw);
    if (/^附录：/.test(title_raw)) {
      return;
    }
    [content_raw, raw] = extract_content(raw);
    const { has_star, comments } = extract_comments(items);
    const parts_raw = extract_parts(items);
    const [title_pivots, title] = extract_pivots(
      title_raw.replace(/\*$/, ''),
      -1,
    );
    const pivots: Pivot[] = [...title_pivots];
    const parts: ContentPart[] = [{ text: title, type: ContentType.title }];
    parts_raw.forEach((part, idx) => {
      const [p, text] = extract_pivots(part.text, idx + 1);
      pivots.push(...p);
      parts.push({
        type: part.type,
        text,
      });
    });
    pages.forEach((page) => page.cleanup());
    const description = has_star ? comments[0] : '';

    const [dates, is_range_date] = date_raw
      ? extract_dates(date_raw)
      : [
          parts
            .filter((i) => i.type == ContentType.subdate)
            .map((j) => extract_dates(j.text)[0][0]),
          false,
        ];

    return {
      title,
      parts,
      comment_pivots: pivots,
      dates,
      is_range_date,
      authors: ['毛泽东'],
      comments: has_star ? comments.splice(1) : comments,
      page_start: range[0],
      page_end: range[1],
      description,
      // title_raw,
      // date_raw,
      // parts_raw,
    };
  };

  if (opt.page_limits.length === 1) {
    return [(await parse_article(opt.page_limits[0]))!];
  }
  async function split_by_article(doc: pdfjsLib.Doc) {
    const res = [];
    let s = '';
    for (const range of opt.page_limits) {
      for (let i = range[0]; i <= range[1]; ++i) {
        const page = await doc.getPage(i);
        const width = page.getViewport({ scale: 1 }).width;
        const content_obj = await page.getTextContent();
        let idx = 0;
        const candidates = [];
        while (
          content_obj.items[idx] &&
          (content_obj.items[idx].transform[4] > width * 0.2 ||
            is_date(content_obj.items[idx].str) ||
            !content_obj.items[idx].str)
        ) {
          candidates.push(content_obj.items[idx].str);
          ++idx;
        }
        if (has_date(candidates.join('')) && !is_date(candidates.join(''))) {
          s += content_obj.items[0].str + '\n';
          res.push(i);
        }
      }
    }
    return res;
  }

  // pages_by_article = await split_by_article();
  const pages_by_article = [
    20, 25, 44, 49, 65, 72, 79, 85, 90, 92, 95, 99, 114, 155, 158, 168, 174,
    183, 208, 213, 217, 219, 225, 233, 241, 243, 262, 307, 317, 320, 329, 331,
    337, 340, 343, 347, 351, 356, 364, 366, 368, 388, 389, 391, 419, 421, 425,
    428, 429, 430, 436, 438, 443, 447, 449, 454, 458, 460, 465, 468, 473, 474,
    475, 477, 488, 498, 516, 518, 521, 522, 525, 529, 533, 536, 544, 549, 557,
    583, 584, 587, 589, 593, 595, 597, 637, 639, 642, 644, 646, 647, 650, 658,
    660, 664, 667, 669, 675, 678, 680, 683, 686, 687, 690, 693, 696, 698, 702,
    707, 709, 710, 713, 716, 720, 721, 732, 734, 739, 740, 742, 744, 745, 747,
    750, 753, 757, 765, 768, 770, 771, 775, 778, 779, 784, 786, 789, 791, 794,
    796, 801, 804, 807, 809, 813, 816, 818, 821, 823, 828, 837, 840, 842, 846,
    848, 850, 853, 862, 867, 872, 876, 878, 888, 891, 893, 894, 895, 896, 900,
    902, 905, 906, 907, 908, 911, 913, 915, 916, 919, 923, 924, 925, 927, 928,
    930, 931, 933, 934, 936, 937, 938, 941, 942, 943, 948, 950, 954, 960, 965,
    969, 971, 972, 973, 984, 986, 991, 1005, 1007, 1020, 1024, 1044, 1047, 1049,
    1062, 1065, 1072, 1076, 1077, 1087, 1106, 1128, 1137, 1139, 1143, 1144,
    1146, 1149, 1158, 1164, 1172, 1181, 1183, 1192, 1194, 1205, 1210, 1212,
    1213, 1214, 1216, 1223, 1230, 1232, 1233, 1235, 1240, 1241, 1254, 1256,
    1262, 1265, 1274, 1276, 1281, 1283, 1286, 1288, 1290, 1291, 1296, 1311,
    1312, 1314, 1317, 1340, 1342, 1352, 1355, 1361, 1363, 1365, 1368, 1372,
    1374, 1378, 1380, 1396, 1400, 1405, 1407, 1409, 1412, 1414, 1417, 1418,
    1419, 1421, 1422, 1423, 1426, 1429, 1434, 1437, 1439, 1443, 1451, 1457,
    1459, 1463, 1465, 1477, 1478, 1480, 1481, 1484, 1486, 1489, 1504, 1506,
    1513, 1516, 1518, 1527, 1529, 1531, 1541, 1544, 1546, 1548, 1551, 1552,
    1554, 1556, 1562, 1563, 1564, 1565, 1573, 1574, 1575, 1578, 1581, 1583,
    1588, 1593, 1596, 1599, 1600, 1602, 1604, 1608, 1611, 1613, 1616, 1618,
    1621, 1622, 1624, 1626, 1630, 1647, 1649, 1650, 1656, 1658, 1659, 1666,
    1668, 1670, 1675, 1677, 1679, 1680, 1681, 1684, 1686, 1698, 1702, 1709,
    1714, 1715, 1722, 1724, 1728, 1729, 1731, 1742, 1745, 1747, 1748, 1751,
    1755, 1762, 1764, 1768, 1769, 1777, 1781, 1787, 1790,
  ];
  pages_by_article.push(opt.page_limits[opt.page_limits.length - 1][1] + 1);

  const res: ParserResult[] = [];
  for (let i = 1; i < pages_by_article.length; ++i) {
    const parser_result = await parse_article([
      pages_by_article[i - 1],
      pages_by_article[i] === 1192
        ? 1183
        : pages_by_article[i] === 1504
        ? 1502
        : pages_by_article[i] - 1,
    ]);
    if (!parser_result) {
      continue;
    }
    res.push(parser_result);
  }
  return res;
}
