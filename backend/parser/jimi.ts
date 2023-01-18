import EPub from 'epub';
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
import { merge_to_lines, pdfjsContentToOCRResult } from './utils';
import { JSDOM } from 'jsdom';

function extract_dates(str: string): { dates: Date[]; is_range_date: boolean } {
  const format1 = Array.from(str.matchAll(/\d+\.\d+(\.\d+)?/g))[0];
  const format2 = Array.from(
    str.matchAll(
      /[\d一二三四五六七八九○〇]+年[\d一二三四五六七八九○〇十]+[-至][\d一二三四五六七八九○〇十]+月/g,
    ),
  )[0];
  const format3 = Array.from(
    str.matchAll(
      /[\d一二三四五六七八九○〇]+年[\d一二三四五六七八九○〇十]+(月[\d一二三四五六七八九○〇十]+[日]?)?/g,
    ),
  )[0];
  function normalize(s: string) {
    return s
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
  }
  if (format1) {
    const s = format1[0].split('.').map((i) => parseInt(i));
    return {
      dates: [
        {
          year: s[0],
          month: s[1],
          day: s[2],
        },
      ],
      is_range_date: false,
    };
  } else if (format2) {
    const s = normalize(format2[0])
      .replace(/[年月日]/g, '.')
      .replace(/[-至]/g, '.')
      .split('.')
      .map((i) => parseInt(i));
    return {
      dates: [
        {
          year: s[0],
          month: s[1],
        },
        {
          year: s[0],
          month: s[2],
        },
      ],
      is_range_date: true,
    };
  } else if (format3) {
    const s = normalize(format3[0])
      .replace(/[年月日]/g, '.')
      .split('.')
      .map((i) => parseInt(i));
    return {
      dates: [
        {
          year: s[0],
          month: s[1],
          day: s[2],
        },
      ],
      is_range_date: false,
    };
  }
  throw Error('bad date string');
}

export async function parse(
  path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const epub = new EPub(path);
  await new Promise((resolve) => {
    epub.parse();
    epub.on('end', resolve);
  });

  const chapters = await Promise.all<{
    id: string;
    title: string;
    text: string;
  }>(
    epub.flow.map(
      (i) =>
        new Promise((resolve) =>
          epub.getChapter(i.id, (err, text) =>
            resolve({
              id: i.id,
              title: i.title,
              text,
            }),
          ),
        ),
    ),
  );

  return chapters.slice(7, -1).map((article) => {
    const { dates, is_range_date } = extract_dates(article.title);
    const title = article.title.replace(/\(.*\)/, '');
    const merged_parts = Array.from(
      new JSDOM(article.text).window.document.querySelectorAll('p'),
    ).map((i) => ({
      text: i.innerHTML,
      type: ContentType.paragraph,
    }));
    return {
      title,
      parts: merged_parts,
      authors: ['毛泽东'],
      dates,
      is_range_date,
      comments: [],
      comment_pivots: [],
      description: '',
      page_start: 0,
      page_end: 0,
    };
  });
}
