import get_books from './books';
import { join } from 'node:path/posix';
// import { AppDataSource } from './data-source';
import ocr from './ocr';
// import lac from './lac';
// import { LACResult } from '../types';

import { init } from './data-source';
import { get_article_id, sleep } from '../utils';
import { normalize } from './utils';
import { basename } from 'node:path';
import { Article } from './entities';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import { ContentType, Date, ParserResult } from '../types';

function bydir(dir: string, author: string, out: string) {
  const files = fs.readdirSync(dir);
  const res = [];
  for (const file of files) {
    const a = fs.readFileSync(dir + '/' + file).toString();
    const dom = new JSDOM(a);

    let title_raw: string[] = [];
    try {
      title_raw = dom.window.document
        .querySelector('.titles')!
        .innerHTML!.split('<br>')
        .map((i) => i.trim())
        .filter((i) => i);
    } catch {
      console.log(file);
      continue;
    }
    const dates: Date[] = [];
    if (/\d+(\.\d+(\.\d+))$/.test(title_raw[title_raw.length - 1])) {
      const date = Array.from(
        title_raw[title_raw.length - 1].matchAll(/\d+(\.\d+(\.\d+))$/g),
      )[0][0];
      dates.push({
        year: parseInt(date.split('.')[0]),
        month: parseInt(date.split('.')[1]),
        day: parseInt(date.split('.')[2]),
      });
      title_raw.pop();
    }
    const authors: string[] = author
      ? [author]
      : title_raw
          .slice(1)
          .reduce((m: string[], i) => [...m, ...i.split(' ')], []);
    const temp = a.split('</font>')[1];
    const source = temp?.split('</div>')[0].trim() || '';
    const p: ParserResult = {
      title: title_raw[0],
      authors,
      dates,
      is_range_date: false,
      comment_pivots: [],
      comments: [],
      page_start: 0,
      page_end: 0,
      description: source,
      parts: [
        {
          type: ContentType.title,
          text: title_raw[0],
        },
      ],
    };
    dom.window.document
      .querySelectorAll(
        '.contents,.titleR,.headingB,.headingN,.titleB,.inscriberR',
      )
      .forEach((i) => {
        p.parts.push({
          type:
            i.className === 'titleB' || i.className === 'headingN'
              ? ContentType.subtitle
              : ContentType.paragraph,
          text: i.textContent!.trim(),
        });
      });
    res.push(p);
  }
  fs.writeFileSync(
    join(__dirname, `parser/GPCR_v3/${out}`),
    JSON.stringify(res),
  );
}

function parse(dir: string, out: string) {
  const files = fs.readdirSync(dir);
  const res = [];
  for (const file of files) {
    let a = fs
      .readFileSync(dir + '/' + file)
      .toString()
      .split('\r\n');
    const title = a[0];
    const authors = a[1].split(' ').filter((i) => i);

    const dates: Date[] = [];
    if (/\d+(\.\d+(\.\d+))$/.test(a[2])) {
      const date = Array.from(a[2].matchAll(/\d+(\.\d+(\.\d+))$/g))[0][0];
      dates.push({
        year: parseInt(date.split('.')[0]),
        month: parseInt(date.split('.')[1]),
        day: parseInt(date.split('.')[2]),
      });
    }
    const source = /^来源：/.test(a[a.length - 1]) ? a[a.length - 1] : '';
    const p: ParserResult = {
      title,
      authors,
      dates,
      is_range_date: false,
      comment_pivots: [],
      comments: [],
      page_start: 0,
      page_end: 0,
      description: source,
      parts: [
        {
          type: ContentType.title,
          text: title,
        },
      ],
    };
    a.slice(3).forEach((i) => {
      if (i)
        p.parts.push({
          type: ContentType.paragraph,
          text: i,
        });
    });
    res.push(p);
  }
  fs.writeFileSync(
    join(__dirname, `parser/GPCR_v3/${out}`),
    JSON.stringify(res),
  );
}

(async () => {
  // const ds = await init();
  // const books = await get_books();
  // const book = books.find((i) => i.entity.id === 'GPCRv3')!;
  // console.log(await book.parser(book.path, book.parser_option));

  parse(join(__dirname, '../a'), 'zs.ts');
  // parse(join(__dirname, '../l'), 'lb.ts');
  // bydir(join(__dirname, '../x/第三版 江青 张春桥 姚文元 王洪文/王洪文'), '王洪文', 'whw.x');
  // bydir(join(__dirname, '../x/第三版 江青 张春桥 姚文元 王洪文/张春桥'), '张春桥', 'zcq.x');
  // bydir(join(__dirname, '../x/第三版 江青 张春桥 姚文元 王洪文/姚文元'), '姚文元', 'ywy.x');
  // bydir(join(__dirname, '../x/第三版新材料 文革期间 66、68  四，中央首长关于文化大革命的讲话和指示 部分'), '', 'others-c.x');
  // bydir(join(__dirname, '../x/b'), '', 'others-b.x');
  // bydir(join(__dirname, '../x/a'), '', 'others-a.x');
})();
