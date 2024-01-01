import { join, basename } from 'node:path/posix';
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

type PartRaw = { page: number; x: number; merge_up?: boolean } & ContentPartRaw;
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
    /^：?[(（]?\d+年/.test(i.text),
  );

  if (date_idx == -1 || date_idx > 4) {
    debugger;
  }

  const title =
    date_idx == -1
      ? raw[0].ocr_results[0].text
      : raw[0].ocr_results.slice(0, date_idx).reduce((m, i) => m + i.text, '');
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
    ignored_article: { [volumn: string]: Set<string> };
    assert_no_title_page: { [volumn: string]: Set<number> };
  } = {
    scale: {
      34: new Map([
        [41, 1.6],
        [398, 1.3],
      ]),
      48: new Map([[523, 1.3]]),
      49: new Map([[494, 1.3]]),
    },
    ignored_article: {
      // TODO
      // 27卷 答谢萨拉·博斯祝贺中华人民共和国成立的电报 在目录中出现，但在正文中缺失（p495），暂时先屏蔽这篇文章
      27: new Set(['答谢萨拉·博斯祝贺中华人民共和国成立的电报']),
    },
    assert_no_title_page: {
      30: new Set([125]),
      33: new Set([123, 535]),
      34: new Set([31, 34, 202, 35,36,37]),
      37: new Set([294]),
      40: new Set([438]),
      41: new Set([472]),
      42: new Set([251]),
      43: new Set([260]),
      44: new Set([169, 533]),
      47: new Set([272]),
      48: new Set([112, 339]),
      49: new Set([270]),
      50: new Set([189, 272]),
      51: new Set([50, 173]),
      52: new Set([275, 317]),
    },
  };

  let catalogs: {
    title: string;
    dates: Date[];
    is_range_date: boolean;
  }[] = [];
  let catalog_candidates: string[] = [];
  function consume_catalog_candidates() {
    for (let i = 0; i < catalog_candidates.length; i++) {
      if (volume === '52' && i >= 143) {
        // 以下文章无日期
        catalogs.push(
          ...[
            '五绝·咏梅',
            '七绝·咏菊',
            '五律·春夜渡海',
            '水调歌头·归舟迎日出',
            '沁园春·再访十三陵',
            '七律·雷电',
            '七绝·大动荡、大分化、大改组',
            '西江月·赠天津团市委',
            '清平乐·赠张志坚',
            '七律·别友人',
            '七律·跨东海',
            '七律·答友人',
            '七律·捷报',
            '读《古诗源》批语',
            '读《初唐四杰集》批语',
            '读《甲乙集》批语',
            '读《注释唐诗三百首》批语',
            '将进酒',
            '早寒有怀',
            '读《近三百年名家词选》批语',
            '苦萨蜜四首',
            '清平乐',
            '读《历代诗话》批语',
            '读《分甘余话》批语',
            '读《明人百家小说》批语',
            '读《智囊》批语',
            '读《绘图增像西游记》批语',
            '读《聊斋志异》批语',
            '白莲教',
            '读《李氏文集》批语',
            '读《古文辞类集》批语',
            '读《两般秋雨庵随笔》批语',
            '读《梳联丛话》批语',
            '读《更记》批语',
            '读《汉书》批语',
            '读《后汉书》批语',
            '读《三国志集解》批语',
            '读《晋书》批语',
            '读《宋书》批语',
            '读《阶书》批语',
            '读《南史》批语',
            '读《北史》批语',
            '读《旧唐书》批语',
            '读《新唐书》批语',
            '读《旧五代史》批语',
            '读《新五代史》批语',
            '读《宋史》批语',
            '读《明史》批语',
            '读《资治通鉴》批语',
            '读《通鉴纪事本末》批语',
            '读《续通鉴纪事本末》批语',
            '读《宋史纪事本末》批语',
            '读《元史纪事本末》批语',
            '读《明史纪事本末》批语',
            '读《十六国春秋》批语',
            '读《读通鉴论》批语',
            '读《王湘绮全集》批语',
            '毛泽东自传',
          ].map((x) => ({
            title: x,
            dates: [],
            is_range_date: false,
          })),
        );
        break;
      }
      let j = i;
      let title = '';
      while (!/^（\d/.test(catalog_candidates[j])) {
        title += catalog_candidates[j];
        ++j;
      }
      catalogs.push({
        title,
        ...extract_dates(catalog_candidates[j], { remove_unknowns: true }),
      });
      i = j;

      if (!catalogs[catalogs.length - 1].dates[0].year) {
        //debugger;
      }

      if (
        fixtures.ignored_article[volume]?.has(
          catalogs[catalogs.length - 1].title,
        )
      ) {
        catalogs.pop();
      }
    }
    catalog_candidates = [];
  }
  const articles_raw: {
    ocr_results: OCRResult[];
    page: number;
  }[][] = [];
  for (let i = 0; i < parser_opt.page_limits.length; ++i) {
    const j = parser_opt.page_limits[i];
    for (let page = j[0]; page <= j[1]; ++page) {
      const origin = await ocr({
        pdf: pdf_path,
        page,
        params: {
    content_thresholds: [0.0, 0.0, 0.0, 0.0],
    line_merge_threshold: 30,
    standard_paragraph_merge_strategy_threshold: 0,
    differential_paragraph_merge_strategy_threshold: 30,
    auto_vsplit: true,
    vsplit: 0.5,
    ...parser_opt.ocr,
        },
        cache_path: join(
          normalize(__dirname),
          `../ocr_cache/${basename(pdf_path).split('.')[0]}/${page}.json`,
        ),
      });
      const ocrResults = origin.ocr_results
        .map(
          (i) =>
            ({
              ...i,
              box: i.box.map((j) =>
                j.map(
                  (k) =>
                    k *
                    (fixtures.scale[volume]?.get(page) || 1),
                ),
              ),
            } as OCRResult),
        )
        .filter((i) => i.text && !/^[:·：\.\d]*$/.test(i.text)) // 去页码
        .filter((i) => i.box[3][1] > 125) // 去页眉
        .map((i) => (i.text === '西' ? { ...i, text: '四' } : i)) // 四经常误识别为西
        .sort((a, b) => a.box[0][1] - b.box[0][1]);

      // 目录，正文中标题含有不能被准确识别的标注，所以以目录的标题为准
      if (i == 0) {
        const catalogs_raw = ocrResults
          .filter((i) => i.text !== '目录' && i.text !== '日录')
          .map((i) => {
            i.text = i.text.replace(/[…，\=\-．:·：\+\.\d]*$/, '');
            i.text = i.text.replace(/^[…，\-．:·：\+\.]*/, '');
            i.text = i.text.replace(/X$/, '');
            return i.text;
          })
          .filter((i) => i);
        catalog_candidates.push(...catalogs_raw);
        // 34卷目录22页缺失（对应原书12页）
        if (volume === '34' && page == 21) {
          consume_catalog_candidates();
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
        if (ocrResults[0].text.startsWith('附录')) {
          ocrResults.shift();
        }
        // 正文
        // 文章可按页码分割（大标题总在一页的最前面）
        const first_letter_height =
          ocrResults[0].box[3][1] - ocrResults[0].box[0][1];
        if (
          first_letter_height > 28 &&
          ocrResults[0].box[0][1] > 200 &&
          !/^[一二三四五六七八九十]+$/.test(ocrResults[0].text) && // 非子标题
          !/^[（\(]+/.test(ocrResults[0].text)
        ) {
          if (!fixtures.assert_no_title_page[volume]?.has(page)) {
            articles_raw.push([]);
          }
        }
        if (!articles_raw[articles_raw.length - 1]) debugger;
        articles_raw[articles_raw.length - 1].push({
          ocr_results: ocrResults,
          page,
        });
      }
    }
  }

  consume_catalog_candidates();

  // console.log(catalogs, articles_raw);
  // console.log(
  //   articles_raw
  //     .map((i) => [i[0].ocr_results[0].text, i[0].page])
  //     .map(
  //       (i, idx) => i[0] + '##' + i[1] + ' ## ' + (catalogs[idx] || {}).title,
  //     ),
  // );

  const articles_parts = articles_raw.map((i) => extract_parts(i));
  return articles_parts.map((i, idx) => ({
    ...i,
    ...catalogs[idx],
    authors: ['毛泽东'],
  }));
}
