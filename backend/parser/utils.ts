import { Date, OCRResult } from "../../types";
import type { Item, ContentObj } from './pdf.js';

export function merge_to_lines(ocrResults: OCRResult[], threshold = 50) {
  const next = new Map<OCRResult, OCRResult>();
  const to_remove = new Map<OCRResult, boolean>();
  for (const a of ocrResults) {
    for (const b of ocrResults) {
      if (a == b) continue;
      if (next.get(a)) {
        continue;
      }
      const x_diff = Math.abs(b.box[0][0] - a.box[1][0]);
      const y_diff = Math.abs(b.box[0][1] - a.box[1][1]);
      if (x_diff + y_diff < threshold && !next.get(b)) {
        next.set(a, b);
        to_remove.set(b, true);
      }
    }
  }
  const lines: OCRResult[] = ocrResults
    .filter((i) => !to_remove.get(i))
    .map((i) => {
      let j = next.get(i);
      const r = i;
      while (j) {
        r.text += j.text;
        j = next.get(j);
      }
      return r;
    })
    .sort((a, b) => a.box[0][1] - b.box[0][1]);
  return lines;
}

export function pdfjsContentToOCRResult(
  obj: ContentObj,
  height: number,
): OCRResult[] {
  return obj.items
    .map((i) => {
      const x = i.transform[4];
      const y = height - i.transform[5];
      const r: OCRResult = {
        text: i.str,
        box: [
          [x, y],
          [x + i.width, y],
          [x + i.width, y + i.height],
          [x, y + i.height],
        ],
      };
      return r;
    })
    .filter((i) => i.text.length);
}

export function toChineseSymbols(str: string) {
  let p = 1;
  const s = Array.from(str);
  while (true) {
    const f = s.indexOf('"');
    if (f > -1) {
      s[f] = p % 2 ? '“' : '”';
    } else {
      break;
    }
    ++p;
  }
  return s.join('');
}

/**
 * 零转换: O○〇 -> 0
 * 中文转换: 一二三四五六七八九十廿卅卌 -> 0-9,10,20,30,40
 * duration转换1： -至— -> -
 * duration转换2： 、，, -> ,
 * 
 * 支持的格式：
 * 1911.10.10-1912.12.12
 * 1911.10.10-12.12
 * 1911.10.10-12
 * 1911.10-12
 * 1911.10.10,11,12
 * 1911.10,12
 */
export function extract_dates(str: string): {dates: Date[], is_range_date: boolean} {
  str = str.replace(/ /g, '');

  const to = '\\-至—';
  const seperator = '\\,，';
  const cn_digitals = '\\d一二三四五六七八九○O〇十廿卅卌';

  function normalize_date(s: string) {
    s = s
      .replace(/卌/g, '四十')
      .replace(/卅/g, '三十')
      .replace(/卅/g, '三十')
      .replace(/廿/g, '二十')
      .replace(/——/g, '-')
      .replace(new RegExp(`[${to}]`, 'g'), '-')
      .replace(new RegExp(`[${seperator}]`, 'g'), ',')
      .replace(/^十年/g, '10年')
      .replace(/^一十一/g, '11') // 少部分文稿使用这种日期
      .replace(/^一十二/g, '12')
      .replace(/^一十三/g, '13')
      .replace(/^一十四/g, '14')
      .replace(/^一十五/g, '15')
      .replace(/^一十六/g, '16')
      .replace(/^一十七/g, '17')
      .replace(/^一十八/g, '18')
      .replace(/^一十九/g, '19')
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
      .replace(/[O○〇]/g, '0');
    return s;
  }

  // 1911.10.10-1912.12.12
  // 1911.10.10-12.12
  // 1911.10.10-12
  // 1911.10-12
  const format_a = Array.from(
    str.matchAll(
      new RegExp(`\\d+\\.\\d+(\\.\\d+)?[${to}]+\\d+(\\.\\d+)?(\\.\\d+)?`, 'g'),
    ),
  )[0];
  // 1911.10.10,11,12
  // 1911.10,12
  const format_b = Array.from(
    str.matchAll(
      new RegExp(
        `\\d+\\.\\d+(\\.\\d+)?[${seperator}]+(\\d+${seperator}?)+`,
        'g',
      ),
    ),
  )[0];
  // 1911.10.10
  // 1911.10
  // 1911
  const format_c = Array.from(
    str.matchAll(new RegExp(`\\d+\\.\\d+(\\.\\d+)?[^${seperator}${to}]+`, 'g')),
  )[0];

  // 一九三二年十月二十日至一九三三年十月二十日
  // 一九三二年十月二十日至十二月二十日
  // 一九三二年十月二十日至十二月
  // 一九三二年十月至十二月
  const format_d = Array.from(
    str.matchAll(
      new RegExp(
        `[${cn_digitals}]+年[${cn_digitals}]+月([${cn_digitals}]+日)?[${to}]+([${cn_digitals}]+年)?([${cn_digitals}]+月)?([${cn_digitals}]+日)?`,
        'g',
      ),
    ),
  )[0];
  // 一九三二年十月二十日，十一月十日
  // 一九三二年十月，十一月
  const format_e = Array.from(
    str.matchAll(
      new RegExp(
        `[${cn_digitals}]+年[${cn_digitals}]+月([${cn_digitals}]+日)?[${seperator}]+[${cn_digitals}]+月([${cn_digitals}]+日)?`,
        'g',
      ),
    ),
  )[0];
  // 一九三二年十月二十日
  // 一九三二年十月
  // 一九三二年
  const format_f = Array.from(
    str.matchAll(
      new RegExp(
        `[${cn_digitals}]+年[${cn_digitals}]+月([${cn_digitals}]+日)?[^${seperator}${to}]`,
        'g',
      ),
    ),
  )[0];

  if (format_a || format_d) {
    const s = normalize_date((format_a || format_d)[0]).split('-');
    let last_year = 0;
    let last_month = 0;
    return {
      dates: s.map((i, idx) => {
        const t = i.split(new RegExp(`[\\.年月日]`)).map((j) => parseInt(j));
        if (idx == 0 || (t[0] && t[1] && t[2])) {
          last_year = t[0] || last_year;
          last_month = t[1] || last_month;
          return {
            year: t[0],
            month: t[1],
            day: t[2],
          };
        } else {
          if (t[0] && t[1]) {
            last_month = t[0];
            return {
              year: last_year,
              month: t[0],
              day: t[1],
            };
          } else {
            return {
              year: last_year,
              month: last_month,
              day: t[0],
            };
          }
        }
      }),
      is_range_date: true,
    };
  } else if (format_b || format_c || format_e || format_f) {
    const s = normalize_date(
      (format_b || format_c || format_e || format_f)[0],
    ).split(',');
    let last_year = 0;
    let last_month = 0;
    return {
      dates: s.map((i, idx) => {
        const t = i.split(new RegExp(`[\\.年月日]`)).map((j) => parseInt(j));
        if (idx == 0 || (t[0] && t[1] && t[2])) {
          last_year = t[0] || last_year;
          last_month = t[1] || last_month;
          return {
            year: t[0],
            month: t[1],
            day: t[2],
          };
        } else {
          if (t[0] && t[1]) {
            last_month = t[0];
            return {
              year: last_year,
              month: t[0],
              day: t[1],
            };
          } else {
            return {
              year: last_year,
              month: last_month,
              day: t[0],
            };
          }
        }
      }),
      is_range_date: false,
    };
  }
  return {
    dates: [{
      year: undefined,
      month: undefined,
      day: undefined,
    }],
    is_range_date: false,
  }
}