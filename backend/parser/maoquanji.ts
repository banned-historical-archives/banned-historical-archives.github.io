import {join, basename} from 'node:path/posix';
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
import { normalize } from '../utils';
import { extract_dates, merge_to_lines } from './utils';

type PartRaw = ({ page: number, x: number, merge_up?: boolean } & ContentPartRaw);
function extract_parts(
  raw: {
    ocr_results: OCRResult[];
    page: number;
  }[],
): {
  description: string;
  page_start: number;
  page_end: number;
  parts: ContentPart[];
  comment_pivots: Pivot[];
  comments: string[];
} {
  // 0.行合并
  // 1.去掉日期和标题（已经在目录中提取出来了）
  // 2.提取页脚标注
  // 3.对剩下的内容分段/合并

  raw = raw.map((i, idx) => ({
    ...i,
    ocr_results: merge_to_lines(i.ocr_results),
  }));

  const date_idx = raw[0].ocr_results.findIndex((i) =>
    /^[(（]?\d+年/.test(i.text),
  );

  if (date_idx == -1 || date_idx > 4) {
    debugger;
  }

  const title = raw[0].ocr_results
    .slice(0, date_idx)
    .reduce((m, i) => m + i.text, '');
  raw[0].ocr_results = raw[0].ocr_results.slice(date_idx + 1);

  const comments_raw: OCRResult[] = [];
  raw.forEach((i, idx) => {
    const comment_idx = i.ocr_results.findIndex((j) => /^\[\d+/.test(j.text));
    if (comment_idx > -1) {
      comments_raw.push(...i.ocr_results.slice(comment_idx));
      i.ocr_results = i.ocr_results.slice(0, comment_idx);
    }
  });

  const contents_raw: PartRaw[] = [];
  const ocr: OCRResult[] = [];
  const ocr_result_to_page = new Map<OCRResult, number>();
  const left_most = new Map<number, number>();
  raw.forEach((i) => {
    i.ocr_results.forEach((j) => {
      ocr.push(j);
      left_most.set(
        i.page,
        Math.min(j.box[0][0], left_most.get(i.page) || Infinity),
      );
      ocr_result_to_page.set(j, i.page);
    });
  });
  for (let i = 0; i < ocr.length; ++i) {
    const text = ocr[i].text.trim();
    const x = ocr[i].box[0][0];
    const height = ocr[i].box[3][1] - ocr[i].box[0][1];
    contents_raw.push({
      page: ocr_result_to_page.get(ocr[i])!,
      text,
      x,
      type: height > 28 ? ContentType.subtitle : ContentType.paragraph,
    });
  }

  const threshold = 30;
  for (let i = 0; i < contents_raw.length; ++i) {
    const last = contents_raw[i - 1];
    const t = contents_raw[i];
    if (last && last.type === t.type) {
      if (t.type == ContentType.paragraph) {
        if (last.page == t.page) {
          if (Math.abs(left_most.get(t.page)! - t.x) < threshold) {
            t.merge_up = true;
          }
        } else {
          if (Math.abs(left_most.get(t.page)! - t.x) < threshold) {
            t.merge_up = true;
          }
        }
      } else if (t.type == ContentType.subtitle) {
        t.merge_up = true;
      }
    }
  }

  const res: ContentPart[] = [
    {
      text: title,
      type: ContentType.title,
    },
  ];
  for (let i = 0; i < contents_raw.length; ++i) {
    if (contents_raw[i].merge_up) {
      res[res.length - 1].text += contents_raw[i].text;
    } else {
      res.push({
        type: contents_raw[i].type,
        text: contents_raw[i].text,
      });
    }
  }

  const comments: string[] = [];
  for (let i = 0; i < comments_raw.length; ++i) {
    if (/^\[\d+/.test(comments_raw[i].text)) {
      comments.push(comments_raw[i].text.replace(/^\[\d+\]?/, ''));
    } else {
      comments[comments.length - 1] += comments_raw[i].text;
    }
  }
  return {
    parts: res,
    comments,
    comment_pivots: [], // TODO
    description: '', // TODO
    page_start: raw[0].page,
    page_end: raw[raw.length - 1].page,
  };
}

export async function parse(
  pdf_path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const volume = basename(pdf_path).replace(/[^\d]/g, '');
  const fixtures: {
    scale: { [volumn: string]: Map<number, number> };
    ignore_article: { [volumn: string]: Set<string> };
    assert_not_title_page: { [volumn: string]: Set<number> };
  } = {
    scale: {
      34: new Map([[41, 1.6], [398, 1.3]]),
    },
    ignore_article: {
      // TODO
      // 27卷 答谢萨拉·博斯祝贺中华人民共和国成立的电报 在目录中出现，但在正文中缺失（p495），暂时先屏蔽这篇文章
      27: new Set(['答谢萨拉·博斯祝贺中华人民共和国成立的电报']),
    },
    assert_not_title_page: {
      30: new Set([125]),
      33: new Set([123]),
      34: new Set([31, 34, 202]),
    },
  };

  let catalogs: {
    title: string;
    dates: Date[];
    is_range_date: boolean;
  }[] = [];
  const articles_raw: {
    ocr_results: OCRResult[];
    page: number;
  }[][] = [];
  for (let i = 0; i < parser_opt.page_limits.length; ++i) {
    const j = parser_opt.page_limits[i];
    for (let page = j[0]; page <= j[1]; ++page) {
      const ocrResults = (
        await ocr({
          pdf: pdf_path,
          page,
          cache_path: join(
            normalize(__dirname),
            `../ocr_cache/maoquanji${basename(pdf_path).replace(
              /[^\d]/g,
              '',
            )}/${page}.json`,
          ),
        })
      ).ocr_results
        .map((i) =>
          fixtures.scale[volume]?.has(page)
            ? {
                ...i,
                box: i.box.map((j) =>
                  j.map((k) => k * fixtures.scale[volume]!.get(page)!),
                ),
              } as OCRResult
            : i,
        )
        .filter((i) => i.text && !/^[:·：\.\d]*$/.test(i.text)) // 去页码
        .filter((i) => i.box[3][1] > 125) // 去页眉
        .sort((a, b) => a.box[0][1] - b.box[0][1]);

      // 目录，正文中标题含有不能被准确识别的标注，所以以目录的标题为准
      if (i == 0) {
        const catalogs_raw = ocrResults
          .filter((i) => i.text !== '目录')
          .map((i) => {
            i.text = i.text.replace(/[…，\=\-．:·：\+\.\d]*$/, '');
            i.text = i.text.replace(/^[…，\-．:·：\+\.]*/, '');
            return i.text;
          })
          .filter((i) => i);
        for (let i = 0; i < catalogs_raw.length; i++) {
          let j = i;
          let title = '';
          while (!/^（\d/.test(catalogs_raw[j])) {
            title += catalogs_raw[j];
            ++j;
          }
          catalogs.push({
            title,
            ...extract_dates(catalogs_raw[j]),
          });
          i = j;

          if (!catalogs[catalogs.length - 1].dates[0].year) {
            debugger
          }

          if (
            fixtures.ignore_article[volume]?.has(
              catalogs[catalogs.length - 1].title,
            )
          ) {
            catalogs.pop();
          }
        }
        // 34卷目录22页缺失（对应原书12页）
        if (volume === '34' && page == 21) {
          catalogs.push(
            ...[
              {
                title: '祝贺捷克斯洛伐克总统萨波托斯基七十寿辰的电报',
                dates: [{ year: 1954, month: 12, day: 16 }],
                is_range_date: false,
              },
              {
                title: '给黄炎培的信',
                dates: [{ year: 1954, month: 12, day: 17 }],
                is_range_date: false,
              },
              {
                title: '给章士钊的信',
                dates: [{ year: 1954, month: 12, day: 17 }],
                is_range_date: false,
              },
              {
                title: '给毛泽荣的信',
                dates: [{ year: 1954, month: 12, day: 18 }],
                is_range_date: false,
              },
              {
                title: '给郭耿光的信',
                dates: [{ year: 1954, month: 12, day: 18 }],
                is_range_date: false,
              },
              {
                title: '关于政协的性质和任务的谈话提纲',
                dates: [{ year: 1954, month: 12, day: 19 }],
                is_range_date: false,
              },
              {
                title: '关于政协的性质和任务',
                dates: [{ year: 1954, month: 12, day: 19 }],
                is_range_date: false,
              },
              {
                title: '给李济深的信',
                dates: [{ year: 1954, month: 12, day: 24 }],
                is_range_date: false,
              },
              {
                title: '给李达的信',
                dates: [{ year: 1954, month: 12, day: 28 }],
                is_range_date: false,
              },
              {
                title: '对韶山全体农民来信的批语和复信',
                dates: [{ year: 1954, month: 12 }],
                is_range_date: false,
              },
              {
                title:
                  '对中央农村工作部关于全国第四次互助合作会议的报告的批语和修改',
                dates: [{ year: 1954, month: 12, day: 30 }],
                is_range_date: false,
              },
              {
                title: '关于阅看冯雪峰的诗和寓言的批语',
                dates: [{ year: 1954, month: 12, day: 31 }],
                is_range_date: false,
              },
              {
                title: '毛泽东、周恩来祝贺越南政府还都河内的电报',
                dates: [{ year: 1954, month: 12, day: 31 }],
                is_range_date: false,
              },
            ],
          );
        }
      } else {
        if (!ocrResults.length) continue;
        // 正文
        // 文章可按页码分割（大标题总在一页的最前面）
        const first_letter_height = ocrResults[0].box[3][1] - ocrResults[0].box[0][1];
        if (
          first_letter_height > 28 &&
          ocrResults[0].box[0][1] > 200 &&
          !/^[一二三四五六七八九十]+$/.test(ocrResults[0].text) && // 非子标题
          !/^[（\(]+/.test(ocrResults[0].text)
        ) {
          if (!fixtures.assert_not_title_page[volume]?.has(page)) {
            articles_raw.push([]);
          }
        }
        if (page == 398)debugger

        articles_raw[articles_raw.length - 1].push({
          ocr_results: ocrResults,
          page,
        });
      }
    }
  }

  // TODO
  // 27卷 201 页 上下颠倒

  // console.log(catalogs, articles_raw);
  console.log(
    articles_raw
      .map((i) => [i[0].ocr_results[0].text, i[0].page])
      .map(
        (i, idx) => i[0] + '##' + i[1] + ' ## ' + (catalogs[idx] || {}).title,
      ),
  );

  const articles_parts = articles_raw.map(i => extract_parts(i));
  return articles_parts.map((i, idx) => ({
    ...i,
    ...catalogs[idx],
    authors: ['毛泽东'],
  }));
}
