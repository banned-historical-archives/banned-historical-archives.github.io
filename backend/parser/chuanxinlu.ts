// https://unpkg.com/browse/pdfjs-dist@2.14.305/legacy/build/pdf.js
import * as pdfjsLib from './pdf.js';

import {
  ArticleType,
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../types';
import {
  merge_to_lines,
  pdfjsContentToOCRResult,
  extract_dates,
} from './utils';

const authors_white_list = [
  '毛泽东',
  '毛远新',
  '陈伯达',
  '艾思奇',
  '关锋',
  '江青',
  '张春桥',
  '魏文伯',
  '赵毅敏',
  '康生',
  '周恩来',
  '陶铸',
  '刘少奇',
  '高扬文',
  '张平化',
  '李雪峰',
  '童小鹏',
  '王任重',
  '胡乔木',
  '谭力夫',
  '阎长贵',
  '李曼村',
  '谢镗忠',
  '李天佑',
  '潘复生',
  '红岩战斗队',
  '戚本禹',
  '刘西尧',
  '谭震林',
  '金明',
  '吴法宪',
  '徐向前',
  '周荣鑫',
  '邓小平',
  '杨成武',
  '叶剑英',
  '谢富治',
  '刘志坚',
  '谷牧',
  '徐今强',
  '刘宁一',
  '廖承志',
  '解学恭',
  '谭启龙',
  '姚文元',
  '吴德',
  '王力',
  '陈毅',
  '叶飞',
  '纪登奎',
  '朱德',
  '董必武',
  '林彪',
  '陶鲁笳',
  '李富春',
  '王洪文',
  '张铁生',
  '吴斌',
  '刘格平',
  '徐立清',
  '刘继业',
  '李先念',
  '傅崇碧',
  '李再含',
  '萧华',
  '周景芳',
  '李英儒',
  '迟群',
  '唐平铸',
  '姚登山',
  '李震',
  '林杰',
  '李英儒',
  '粟裕',
  '华国锋',
  '聂荣臻',
  '邱会作',
  '杨得志',
  '谢静宜',
  '李钟奇',
  '徐景贤',
  '王效禹',
  '丁国钰',
  '黄作珍',
  '李作鹏',
  '许世友',
];

type PartRaw = {
  page: number;
  merge_up?: boolean;
} & ContentPartRaw;

function extract_title_authors_dates(parts: ContentPart[]) {
  const candidate = parts
    .slice(0, 4)
    .map((i) => i.text)
    .join('')
    .replace(/^\d+[\.．·]\*?/, '');
  const type0_idx = candidate.indexOf('(时间');
  const type0_end_idx = candidate.indexOf(')', type0_idx);
  const type1_idx = candidate.indexOf('(无具体日期');
  const type1_end_idx = candidate.indexOf(')', type1_idx);
  const type2_idx = candidate.indexOf('(具体日期');
  const type2_end_idx = candidate.indexOf(')', type2_idx);
  const type3_idx = candidate.indexOf('(19');
  const type3_end_idx = candidate.indexOf(')', type3_idx);

  // TODO
  let rests = parts;

  let title = '';
  let authors: string[] = [];
  let dates: Date[] = [];
  let is_range_date = false;
  if (type0_idx !== -1) {
    title = candidate.slice(0, type0_idx);
  } else if (type1_idx !== -1) {
    title = candidate.slice(0, type1_idx);
  } else if (type2_idx !== -1) {
    title = candidate.slice(0, type2_idx);
  } else if (type3_idx !== -1) {
    title = candidate.slice(0, type3_idx);
    dates = extract_dates(candidate.slice(type3_idx, type3_end_idx + 1)).dates;
  } else {
    if (parts[0].text.startsWith('270')) {
      title = '童小鹏接待内蒙干部及师生谈话记录';
      dates = [{ year: 1966, month: 11, day: 18 }];
    } else if (parts[0].text.startsWith('276')) {
      title =
        '陶铸、周荣鑫在接见毛泽东思想红卫兵沈阳总部各大专院校代表时的讲话';
      dates = [{ year: 1966, month: 11, day: 17 }];
    } else if (parts[0].text.startsWith('286')) {
      title = '关锋的讲话';
    } else if (parts[0].text.startsWith('496')) {
      title = '江青讲话摘录';
    } else if (parts[0].text.startsWith('499')) {
      title = '戚本禹接见沈阳音乐学院毛泽东思想红卫兵红色造反团的讲话';
      dates = [{ year: 1967, month: 2, day: 9 }];
    } else if (parts[0].text.startsWith('607')) {
      title = '周恩来对反修的指示';
    } else if (parts[0].text.startsWith('624')) {
      title = '谢富治对蒯大富的讲话';
    } else if (parts[0].text.startsWith('771')) {
      title = '周恩来、杨成武接见时的讲话';
      dates = [{ year: 1967, month: 5, day: 14 }];
    } else if (parts[0].text.startsWith('650')) {
      title =
        '周恩来、陈伯达、康生、江青、叶群、王力、张春桥、关锋、戚本禹、萧 华、杨成武、曹耿等接见福建省赴京代表团和三司、北大、科大“11·23”等 南下赴榕回校同学时的讲话';
      dates = [{ year: 1967, month: 3, day: 31 }];
    } else if (parts[0].text.startsWith('786')) {
      title =
        '姚文元在上海纪念《在延安文艺座谈会上的讲话》 发表二十五周年大会上的讲话:《在延安文艺座谈会上的讲话》 是进行无产阶级文化大革命的革命纲领';
      dates = [{ year: 1967, month: 5, day: 23 }];
    } else if (parts[0].text.startsWith('788')) {
      title =
        '陈伯达、谢富治、关锋、戚本禹、叶群等在接见 大专院校红代会核心组及外语学院“红旗造反团”、“616”、 二外首都红卫兵等革命组织负责人时的谈话纪要';
      dates = [{ year: 1967, month: 5, day: 27 }];
    } else if (parts[0].text.startsWith('801')) {
      title = '谢富治讲解《关于正确处理人民内部矛盾的问题》';
      dates = [{ year: 1967, month: 6, day: 16 }];
    } else if (parts[0].text.startsWith('843')) {
      title = '康生接见河南代表讲话';
      dates = [{ year: 1967, month: 7, day: 18 }];
    } else if (parts[0].text.startsWith('990')) {
      title = '陈伯达同志谈平反';
    } else if (parts[0].text.startsWith('999')) {
      title = '张春桥对修改党章的意见';
    } else if (parts[0].text.startsWith('1005')) {
      title = '康生对北海舰队的指示';
    } else if (parts[0].text.startsWith('1050')) {
      title = '周恩来在沈阳军区处长级干部会上的三点指示';
    } else if (parts[0].text.startsWith('1063')) {
      title =
        '周恩来等中央首长接见吉林省革委会常委、委员、 群众代表、部分专案组人员和军队代表时的重要讲话';
    } else if (parts[0].text.startsWith('1090')) {
      title =
        '迟群介绍清华大学坚决贯彻执行对知识分子“再教育” “给出路”的政策的情况';
    } else if (parts[0].text.startsWith('1104')) {
      title =
        '周恩来、江青、姚文元、迟群、谢静宜在中共中央直属机关、 国家机关批林批孔动员大会上的讲话';
      dates = [{ year: 1974, month: 1, day: 25 }];
    } else if (parts[0].text.startsWith('1117')) {
      title =
        '迟群、谢静宜在清华大学机械系学员和干部 学习一九七六年五月十六日两报一刊社论座谈会上的讲话(节录)';
    } else {
      debugger;
    }
  }

  title = title.replace(/①/, '');

  for (const i of authors_white_list) {
    if (title.indexOf(i) >= 0) {
      authors.push(i);
    }
  }

  if (
    authors.length === 0 &&
    (title.indexOf('中央首长') >= 0 || title.indexOf('中央文革') >= 0)
  ) {
    const temp = parts.map((i) => i.text).join('');
    [
      '康生',
      '江青',
      '王力',
      '关锋',
      '萧华',
      '杨成武',
      '叶群',
      '姚文元',
      '戚本禹',
      '陈伯达',
    ].forEach((i) => {
      if (temp.indexOf(i) >= 0 && !authors.find((x) => x == i)) {
        authors.push(i);
      }
    });
  }

  return {
    title,
    authors,
    dates,
    is_range_date,
    rests,
  };
}

function merge_parts(parts: PartRaw[]): ContentPart[] {
  const res: ContentPart[] = [];
  for (let i = 0; i < parts.length; ++i) {
    if (parts[i].merge_up) {
      res[res.length - 1].text += parts[i].text;
    } else {
      res.push({
        type: parts[i].type,
        text: parts[i].text,
      });
    }
  }
  return res;
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
    const parts: PartRaw[] = [];
    const pages = await Promise.all(num_pages.map((i) => doc.getPage(i)));
    let content_objs = await Promise.all(
      pages.map((page) => page.getTextContent()),
    );
    const viewport = pages[0].getViewport({ scale: 1 });
    const lines: (OCRResult & { page_idx: number })[] = [];
    content_objs.forEach((content_obj, page_idx) => {
      const res = merge_to_lines(
        pdfjsContentToOCRResult(content_obj, viewport.height)
          .map((i) => {
            // 去掉空格和特殊字符
            i.text = i.text.replace(/[ ]/g, '');
            return i;
          })
          .filter((i) => i.text && i.box[0][1] < 788), // 去掉页眉页脚
        10,
      );
      lines.push(...res.map((i) => ({ ...i, page_idx })));
    });
    for (let idx = 0, k = parser_opt.idx!; idx < lines.length; ++idx) {
      // if (lines[idx].page_idx + range[0] == 488) debugger;

      let found =
        /^\d+[\.．·]/.test(lines[idx].text) &&
        (/\(时间/.test(lines[idx].text) ||
        /\(无?具体日期/.test(lines[idx].text) ||
        /\(无?具体日期/.test(lines[idx + 1]?.text) ||
        /\([时原]/.test(lines[idx + 1]?.text)
          ? true
          : lines[idx + 2]
          ? /\(\d+年/.test(lines[idx].text) ||
            /\(\d+年/.test(lines[idx + 1].text) ||
            /\(\d+年/.test(lines[idx + 2].text)
          : lines[idx + 1]
          ? /\(\d+年/.test(lines[idx].text) ||
            /\(\d+年/.test(lines[idx + 1].text)
          : true);
      found = found && parseInt(lines[idx].text) === k;

      if (
        parseInt(lines[idx].text) === 270 ||
        parseInt(lines[idx].text) === 276 ||
        parseInt(lines[idx].text) === 286 ||
        parseInt(lines[idx].text) === 348 ||
        parseInt(lines[idx].text) === 650 ||
        parseInt(lines[idx].text) === 583 ||
        parseInt(lines[idx].text) === 771 ||
        parseInt(lines[idx].text) === 786 ||
        parseInt(lines[idx].text) === 788 ||
        parseInt(lines[idx].text) === 801 ||
        parseInt(lines[idx].text) === 843 ||
        parseInt(lines[idx].text) === 999 ||
        parseInt(lines[idx].text) === 1063 ||
        parseInt(lines[idx].text) === 1090 ||
        parseInt(lines[idx].text) === 1104 ||
        parseInt(lines[idx].text) === 1117 ||
        parseInt(lines[idx].text) === 860 ||
        parseInt(lines[idx].text) === 496
      ) {
        found = true;
      }
      if (!found) {
        parts.push({
          merge_up: lines[idx].box[0][0] < 110,
          page: lines[idx].page_idx + range[0],
          type: ContentType.paragraph,
          text: lines[idx].text,
        });
      } else {
        ++k;
        parts.push({
          merge_up: false,
          type: ContentType.title,
          page: lines[idx].page_idx + range[0],
          text: lines[idx].text,
        });
      }
    }

    const articles: PartRaw[][] = [];
    for (let i = 0; i < parts.length; ++i) {
      if (parts[i].type === ContentType.title) {
        articles.push([]);
        if (
          !parts[i + 1] ||
          (parts[i + 1] && parts[i + 1].type === ContentType.title)
        ) {
          articles[articles.length - 1].push(parts[i]);
          continue;
        }
        while (parts[i].type === ContentType.title) {
          articles[articles.length - 1].push(parts[i]);
          ++i;
        }
        --i;
        continue;
      } else {
        if (articles[articles.length - 1])
          articles[articles.length - 1].push(parts[i]);
      }
    }

    return articles.map((article) => {
      const merged_parts = merge_parts(article);
      const { title, authors, dates, rests, is_range_date } =
        extract_title_authors_dates(merged_parts);
      return {
        title,
        parts: rests,
        authors,
        dates,
        is_range_date,
        comments: [],
        comment_pivots: [],
        description: '',
        page_start: article[0].page,
        page_end: article[article.length - 1].page,
      };
    });
  };

  const parser_results: ParserResult[] = [];
  for (const limit of parser_opt.page_limits) {
    parser_results.push(...(await parse_all(limit)));
  }
  return parser_results;
}
