import { DBFFile } from 'dbffile-fix-decoding';
import { join } from 'path';
// const MemoFile =require('memo_file');
import iconvlite from 'iconv-lite';
import {
  ArticleCategory,
  ContentType,
  Date,
  ParserOption,
  ParserResult,
  TagType,
} from '../../types';

import { readSync, openSync, statSync } from 'node:fs';
import { readFileSync, writeFileSync } from 'fs';

function readBytes(fd: number, start: number, end: number) {
  const length = end - start;
  const buffer = new Buffer(length);
  readSync(fd, buffer, 0, length, start);
  return buffer;
}

const MemoHeaderLength = 512;
const MemoBlockHeaderLength = 8;
function getFPTByIdx(
  fd: number,
  blockSize: number,
  i: number,
): [string, number] {
  const offset = blockSize * i + MemoHeaderLength;
  const headerStart = offset;
  const headerEnd = headerStart + MemoBlockHeaderLength;
  const buf = readBytes(fd, headerStart, headerEnd);
  const blockSignature = buf.readUIntBE(0, 4);
  const recordLength = buf.readUIntBE(4, 4);
  const contentStart = offset + MemoBlockHeaderLength;
  const contentEnd = contentStart + recordLength;
  const contentBuffer = readBytes(fd, contentStart, contentEnd);
  return [
    iconvlite.decode(contentBuffer, 'gb2312'),
    Math.ceil((contentEnd - MemoHeaderLength) / blockSize),
  ];
}

function getContents(path: string) {
  const fd = openSync(path, 'r');
  const buffer = readBytes(fd, 0, MemoHeaderLength);

  const fsize = statSync(path).size;
  const memoHeader = {
    blockSize: buffer.readUIntBE(6, 2),
    nextFreeBlock: buffer.readUIntBE(0, 4),
  };

  const res: string[] = [];
  for (let i = 0, block_idx = 0, content = ''; ; ++i) {
    if (block_idx * memoHeader.blockSize + MemoHeaderLength >= fsize) break;
    [content, block_idx] = getFPTByIdx(fd, memoHeader.blockSize, block_idx);
    res.push(content);
  }
  return res;
}

function has_date(s: string) {
  return /\d\d\d\d\.?/.test(s);
}

async function get_records<T>(path: string) {
  const dbf = await DBFFile.open(path, {
    readMode: 'loose',
    encoding: 'gb2312',
  });
  return (await dbf.readRecords(dbf.recordCount)) as T[];
}
export async function parse(
  dirPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  /*
  const memos = getContents(join(dirPath, 'mainfile.FPT'));
  const x = new Map<string, string>();
  const blacklist: { [k: string]: boolean } = {
    '《中国文化大革命文库光盘》': true,
    '二，毛泽东关于文化大革命的讲话、指示和文章': true,
    '三，林彪关于文化大革命的讲话、指示和文章': true,
    '四，中央首长关于文化大革命的讲话和指示': true,
    '五，有关文化大革命的重要报刊社论文章': true,
    '六，文化大革命中红卫兵、群众运动重要文献': true,
    '七，文化大革命中的异端思潮重要文献': true,
    '一，有关文化大革命的中共文件、指示、公报汇编': true,
    编制说明: true,
    总导言: true,
    序言: true,
  };
  const date_fixture: { [k: string]: Date } = {
    中国共产党第十一届中央委员会第五次全体会议关于为刘少奇同志平反的决议: {
      year: 1980,
      day: 29,
      month: 2,
    },
    '恶毒的用心　卑劣的手法──批判安东尼奥尼拍摄的题为《中国》的反华影片': {
      year: 1974,
      month: 1,
      day: 30,
    },
  };

  const res: ParserResult[] = [];
  for (let memo of memos) {
    const paragraphs = memo.split('\r\n');
    const maybe_title = paragraphs[1].trim();
    const merge_title =
      maybe_title.startsWith('──') ||
      (maybe_title.startsWith('（') && !maybe_title.startsWith('（１９'));
    let title = paragraphs[0].trim() + (merge_title ? maybe_title : '');
    const article: ParserResult = {
      title: '',
      tags: [],
      description: '',
      authors: [],
      dates: [],
      is_range_date: false,
      parts: [],
      comments: [],
      comment_pivots: [],
      file_id: '',
      page_start: 0,
      page_end: 0,
    };
    if (blacklist[title]) {
      continue;
    }
    paragraphs.shift();
    if (merge_title) {
      paragraphs.shift();
    }
    const dates: Date[] = date_fixture[title] ? [date_fixture[title]] : [];
    const headers: string[] = [];
    while (true) {
      const x = paragraphs.shift();
      if (!x || !x.trim()) break;
      headers.push(x);
    }
    if (title === '七律：有所思  ［毛泽东］') {
      title = '七律：有所思';
      while (true) {
        const x = paragraphs.shift();
        if (!x) break;
        headers.push(x);
      }
    }
    for (let i = 0; i < headers.length; ++i) {
      const h = headers[i].trim();
      if (/^[─－]+\d+/.test(h)) {
        headers[i - 1] += h;
        headers[i] = '';
      }
    }
    for (let i = 0; i < headers.length; ++i) {
      const h = headers[i].trim();
      if (/─+\d+/.test(h)) {
        if (h === '1968─1969') {
          dates.push({ year: 1968 }, { year: 1969 });
          headers[i] = '';
        } else if (h === '1967.02.12─16') {
          dates.push(
            { year: 1967, month: 2, day: 12 },
            { year: 1967, month: 2, day: 16 },
          );
          headers[i] = '';
        } else if (h === '1967.07─09') {
          dates.push({ year: 1967, month: 7 }, { year: 1967, month: 9 });
          headers[i] = '';
        } else if (h === '1975.10.00──1976.01.00') {
          dates.push({ year: 1975, month: 10 }, { year: 1976, month: 1 });
          headers[i] = '';
        } else if (h === '1966.03.26─1966.03.27') {
          dates.push(
            { year: 1966, month: 3, day: 26 },
            { year: 1966, month: 3, day: 27 },
          );
          headers[i] = '';
        } else {
          debugger;
        }
      }
      if (!has_date(headers[i])) continue;
      const [year, month, day] = headers[i]
        .match(/\d\d\d\d\.?\d?\d?\.?\d?\d?/)![0]
        .split('.');
      dates.push({
        year: parseInt(year) || undefined,
        month: parseInt(month) || undefined,
        day: parseInt(day) || undefined,
      });
      headers[i] = headers[i].replace(/\d\d\d\d\.?\d?\d?\.?\d?\d?；?/, '');
    }
    const authors: string[] = [];
    for (let i = 0; i < headers.length; ++i) {
      const h = headers[i].trim();
      if (h.length <= 3) {
        authors.push(h);
      } else if (h.startsWith('（')) {
        continue;
      } else {
        const maybe_authors = h.split(' ').filter((i) => i);
        if (maybe_authors.length > 1) {
          if (maybe_authors.reduce((m, i) => m && i.length <= 3, true)) {
            authors.push(...maybe_authors);
          } else if (/大学(物理系)?$/.test(maybe_authors[0])) {
            authors.push(...maybe_authors);
          }
        } else if (
          maybe_authors.indexOf('首都红卫兵') >= 0 ||
          /编辑部$/.test(h) ||
          /政治部$/.test(h) ||
          /文献部$/.test(h) ||
          /总部$/.test(h) ||
          /分部$/.test(h) ||
          /接待站$/.test(h) ||
          /负责人$/.test(h) ||
          /文艺社$/.test(h) ||
          /队[）”]?$/.test(h) ||
          /组$/.test(h) ||
          /委会$/.test(h) ||
          /代会$/.test(h) ||
          /战士$/.test(h) ||
          /军区$/.test(h) ||
          /卫军$/.test(h) ||
          /战斗组$/.test(h) ||
          /战斗队等?$/.test(h) ||
          /代表大会$/.test(h) ||
          /代表$/.test(h) ||
          /办公室$/.test(h) ||
          /战兵团$/.test(h) ||
          /战斗团$/.test(h) ||
          /委员会$/.test(h) ||
          /评论员$/.test(h) ||
          /通讯员$/.test(h) ||
          /造反团$/.test(h) ||
          /红卫兵$/.test(h) ||
          /通讯社$/.test(h) ||
          /职工$/.test(h) ||
          /联络站$/.test(h) ||
          /支部$/.test(h) ||
          /编者$/.test(h) ||
          /留欧学生$/.test(h) ||
          /指挥部等?$/.test(h) ||
          /中央文革$/.test(h) ||
          /调查员$/.test(h) ||
          /造反组织$/.test(h) ||
          /兵团$/.test(h) ||
          /记者$/.test(h) ||
          /司令部$/.test(h)
        ) {
          authors.push(...maybe_authors);
        } else if (/号$/.test(h)) {
          article.file_id = h;
        } else {
          console.log('may', h);
          // debugger;
        }
      }
    }

    if (title === '新年献词' && memo.indexOf('跨进了一九七三年') >= 0) {
      dates[0].year = 1973;
    }
    article.title = title;
    article.authors.push(...authors);
    const id = `${title}-${JSON.stringify(authors)}-${JSON.stringify(dates)}-${article.file_id}`;

    if (x.get(id)) {
      const a = memo.replace(/\r\n/g, '').replace(/ /g, '');
      const b = x.get(id)?.replace(/\r\n/g, '').replace(/ /g, '');
      if (a == b) {
        continue;
      }
      if (title.startsWith('周恩来关于国务院各副总理分工问题的请示报告')) {
        if (memo.indexOf('陈永贵') >= 0) {
          x.set(id, memo);
        }
        continue;
      }
      if (title.startsWith('红卫兵不怕')) {
        if (memo.indexOf('＊＊＊＊＊') <= 0) {
          x.set(id, memo);
        }
        continue;
      }
      if (
        title.startsWith('中国革命和国际共产主义运动历史上前所未有的伟大革命创')
      ) {
        if (memo.indexOf('苏谦益') >= 0) {
          x.set(id, memo);
        }
        continue;
      }
      if (title.startsWith('周恩来在全国财贸系统大会上的讲话')) {
        if (memo.indexOf('财贸系统革命造反联络委员会') >= 0) {
          x.set(id, memo);
        }
        continue;
      }
      if (title.startsWith('纪念鲁迅')) {
        if (memo.indexOf('附图［略］首都') <= 0) {
          x.set(id, memo);
        }
        continue;
      }

      console.log('warn', title);
      console.log(a, b);
    }
    x.set(id, memo);
    res.push(article);
  }
  */

  //docid
  // 5 中央文件
  // 6 mao
  // 7 lin
  // 8 首长
  // 9 社论
  // 10 群众

  const mainfile = await get_records<{
    DOCID: number;
    TITLE: string;
    CONTENTS: string;
    YEAR: number;
    MONTH: number;
    DAY: number;
    PARENTID: number;
  }>(join(dirPath, 'mainfile.dbf'));
  const subjects = await get_records<{
    SUBID: number;
    SUBJECT: string;
  }>(join(dirPath, 'subjects.dbf'));
  const issuers = await get_records<{
    ISSUERID: number;
    ISSUER: string;
  }>(join(dirPath, 'issuers.dbf'));
  const authors = await get_records<{
    AUTHORID: number;
    AUTHOR: string;
  }>(join(dirPath, 'authors.dbf'));
  const characters = await get_records<{
    CHARID: number;
    NAME: string;
  }>(join(dirPath, 'characters.dbf'));
  const auth2doc = await get_records<{
    AUTHORID: number;
    DOCID: number;
  }>(join(dirPath, 'auth2doc.dbf'));
  const sub2doc = await get_records<{
    SUBID: number;
    DOCID: number;
  }>(join(dirPath, 'sub2doc.dbf'));
  const iss2doc = await get_records<{
    ISSUERID: number;
    DOCID: number;
  }>(join(dirPath, 'iss2doc.dbf'));
  const char2doc = await get_records<{
    CHARID: number;
    DOCID: number;
  }>(join(dirPath, 'char2doc.dbf'));

  const res: ParserResult[] = [];
  for (let idx = 11; idx < mainfile.length; ++idx) {
    const a = mainfile[idx];
    const author_ids = auth2doc
      .filter((i) => i.DOCID === a.DOCID)
      .map((i) => i.AUTHORID);
    const char_ids = char2doc
      .filter((i) => i.DOCID === a.DOCID)
      .map((i) => i.CHARID);
    const iss_ids = iss2doc
      .filter((i) => i.DOCID === a.DOCID)
      .map((i) => i.ISSUERID);
    const sub_ids = sub2doc
      .filter((i) => i.DOCID === a.DOCID)
      .map((i) => i.SUBID);

    const tags: {
      name: string;
      type: TagType;
    }[] = [];
    if (a.PARENTID === 5) {
      tags.push({
        name: ArticleCategory.centralFile,
        type: TagType.articleCategory,
      });
    } else if (a.PARENTID === 6 || a.PARENTID === 7 || a.PARENTID === 8) {
      tags.push({
        name: ArticleCategory.keyFigures,
        type: TagType.articleCategory,
      });
    } else if (a.PARENTID === 9) {
      tags.push({
        name: ArticleCategory.editorial,
        type: TagType.articleCategory,
      });
    } else if (a.PARENTID === 10) {
      tags.push({
        name: ArticleCategory.keyPapersFromTheMasses,
        type: TagType.articleCategory,
      });
    } else if (a.PARENTID === 11) {
      continue;
      // tags.push({ name: '异端思潮重要文献', type: TagType.articleCategory });
    }

    issuers
      .filter((i) => iss_ids.includes(i.ISSUERID))
      .forEach((i) =>
        tags.push({
          name: i.ISSUER,
          type: TagType.issuer,
        }),
      );
    subjects
      .filter((i) => sub_ids.includes(i.SUBID))
      .forEach((i) =>
        tags.push({
          name: i.SUBJECT,
          type: TagType.subject,
        }),
      );
    characters
      .filter((i) => char_ids.includes(i.CHARID))
      .forEach((i) =>
        tags.push({
          name: i.NAME,
          type: TagType.character,
        }),
      );
    const content =
      a.CONTENTS.split('\r\n\r\n').slice(1).join('\r\n') || a.CONTENTS;
    const article: ParserResult = {
      title: a.TITLE,
      tags,
      description: '',
      authors: authors
        .filter((i) => author_ids.includes(i.AUTHORID))
        .map((i) => i.AUTHOR),
      dates: [
        {
          year: a.YEAR || undefined,
          month: a.MONTH || undefined,
          day: a.DAY || undefined,
        },
      ],
      is_range_date: false,
      parts: [
        {
          text: a.TITLE,
          type: ContentType.title,
        },
        ...content
          .split('\r\n')
          .map((i) => i.trim())
          .filter((i) => i)
          .map((i) => ({
            // TODO
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      comments: [],
      comment_pivots: [],
      file_id: '',
      page_start: 0,
      page_end: 0,
      ...(overwrite[a.TITLE] ? overwrite[a.TITLE] : {}),
    };
    res.push(article);
  }
  return res;
}

const overwrite: { [title: string]: Partial<ParserResult> } = {
  中央领导同志在北京工人体育场的讲话: {
    authors: ['江青', '姚文元', '李雪峰', '康生'],
  },
  张春桥在上海市革命造反派座谈会上的讲话: {
    authors: ['张春桥', '姚文元'],
  },
  我为什么参加红色造反团: {
    dates: [{ year: 1966, month: 12, day: 11 }],
  },
  张春桥同志接见上海红革会与工人革命造反总司令部代表的谈话记录: {
    title: '张春桥接见红卫兵上海市大专院校革命委员会及上海市工人革命造反总司令部代表的谈话',
  },
  中央首长第三次接见安徽双方代表团的指示: {
    authors: ['康生', '江青', '姚文元'],
  },
  中央首长接见全国铁路交通会议代表时的讲话: {
    title: '中央首长接见全国铁路、交通会议代表时的讲话',
    authors: ['周恩来', '江青', '陈伯达', '康生', '姚文元'],
  }
};
