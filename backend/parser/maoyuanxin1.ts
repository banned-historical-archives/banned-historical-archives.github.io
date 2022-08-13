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

function is_date(i: string) {
  return (
    /^（[一二三四五六七八九至O○〇十年月日—，、初廿卄卅卌春夏秋冬]+）/.test(i) &&
    /^（.*[年月日]+.*）/.test(i)
  );
}

type PartRaw = ({ page: number, x: number, merge_up?: boolean } & ContentPartRaw);
function extract_parts(
  ocr: OCRResult[],
  page: number,
): PartRaw[] {
  // 去掉页码
  ocr = ocr.filter(i => !/^[-\d—三一\.]+$/.test(i.text.trim()));
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
  for (let i = 0; i < paragraphs.length; ++i) {
    const last = paragraphs[i - 1];
    const next = paragraphs[i + 1];
    const t = paragraphs[i];
    if (last && last.x < t.x && t.x - last.x > 25) {
      t.merge_up = false;
    } else if (next && next.x < t.x && t.x - next.x > 25) {
      t.merge_up = false;
    } else {
      if (last && !last.merge_up && Math.abs(t.x - last.x) < 25) {
        t.merge_up = false;
      } else {
        t.merge_up = t.x - min_x < 50;
      }
    }
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

function extract_dates(s: string): [Date[], boolean] {
  if (s.length > 30) {
    return [[{ year: undefined }], false];
  }
  if (s.search(/[^\d一二三四五六七八九至，—、O○〇十年月日廿（）]/) >= 0) {
    // console.warn('异形日期:', s);
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

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const parts = [];
  for (
    let i = parser_opt.page_limits[0][0];
    i <= parser_opt.page_limits[0][1];
    ++i
  ) {
    const path = imgPath.split('/public/books/')[1] + '/' + i + '.jpg';
    const ocrResults = (await ocr({img: path})).filter(i => i.text);

    if (i === parser_opt.page_limits[0][1]) {
      // 取左边
      parts.push(
        ...extract_parts(
          ocrResults.sort((a, b) => a.box[0][1] - b.box[0][1]),
          i,
        ),
      );
    } else {
      const min_x = ocrResults.reduce(
        (m, x) => Math.min(m, x.box[0][0]),
        Infinity,
      );
      const max_x = ocrResults.reduce(
        (m, x) => Math.max(m, x.box[1][0]),
        -Infinity,
      );

      const left = ocrResults
        .filter((x) => x.box[0][0] < (min_x + max_x) / 2)
        .sort((a, b) => a.box[0][1] - b.box[0][1]);
      const right = ocrResults
        .filter((x) => x.box[0][0] > (min_x + max_x) / 2)
        .sort((a, b) => a.box[0][1] - b.box[0][1]);

      if (i === parser_opt.page_limits[0][0]) {
        // 取右边
        // 去掉一个标题
        parts.push(...extract_parts(right.slice(1), i));
      } else {
        parts.push(...extract_parts(left, i));
        parts.push(...extract_parts(right, i));
      }
    }
  }
  
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
      articles[articles.length - 1].push(parts[i]);
    }
  }

  const res: ParserResult[] = articles.map((article) => {
    const merged_parts = merge_parts(article);
    const title = merged_parts[0].text.replace(/^（[一二三四五六七八九十]+）/, '');
    let title_has_date = title.indexOf('日');
    title_has_date =
      title_has_date >= 0 ? title_has_date : title.indexOf('月');
    merged_parts[0].text = title;
    return {
      title,
      parts: merged_parts,
      authors: ['毛远新'],
      dates:
        title_has_date >= 0
          ? extract_dates(title.substr(0, title_has_date + 1))[0]
          : [
              {
                year: 1975,
                month: 3,
              },
              { year: 1975, month: 4, day: 10 },
              { year: 1975, month: 7, day: 25 },
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
