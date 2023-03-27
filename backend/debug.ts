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
import { extract_dates } from './parser/utils';

function fix() {
  for (let volume of [
    1,
    2,
    3,
    '4-1',
    '4-2',
    5,
    6,
    '7-1',
    '7-2',
    8,
    '9-1',
    '9-2',
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
  ]) {
    const cfg_path = join(__dirname, `./books/maoquanji${volume}.ts`);
    const tscfg = eval(
      `(() => (${fs
        .readFileSync(cfg_path)
        .toString()
        .replace(/export default/, '')
        .trim()
        .replace(/\;$/, '')}))()`,
    );
    tscfg.parser_option = {
      page_limits: [],
      ext: 'pdf',
      articles: tscfg.parser_option.articles
        .filter((i: any, idx: number) => {
          if (i.dates[0] && !i.dates[0].year) {
            tscfg.parser_option.articles[idx - 1].page_end = i.page_end;
            return false;
          }
          if (!i.title || i.title.length > 50) {
            tscfg.parser_option.articles[idx - 1].page_end = i.page_end;
            return false;
          }
          return true;
        })
        .map((i: any) => {
          return {
            ...i,
            title: i.title.replace(/[“”\"\!\！口]$/, ''),
          };
        }),
      ocr: {
        content_thresholds: [0.06, 0.06, 0.01, 0.01],
      },
    };
    tscfg.parser_id = 'automation';
    (tscfg.path = `/archives8/mao-quanji/maoquanji${volume}.pdf`),
      (tscfg.entity.files = `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives8/main/mao-quanji/maoquanji${volume}.pdf`),
      fs.writeFileSync(cfg_path, `export default ${JSON.stringify(tscfg)};`);
  }
}

(async () => {
  fix();
  return;
  // 4 7 9
  const volume = '9-2';
  const articles = [];
  const end = 234;
  for (let i = 1; i <= end; ++i) {
    const json = JSON.parse(
      fs
        .readFileSync(
          join(__dirname, `./ocr_cache/maoquanji${volume}/${i}.json`),
        )
        .toString(),
    );
    const d = json.ocr_results.findIndex(
      (i: any) =>
        (i.text.startsWith('（') || i.text.endsWith('）')) &&
        /^（?\d+年[\d月日]+$/.test(i.text) &&
        /^（?[\d年月日]+）?$/.test(i.text),
    );
    if (d >= 0) {
      articles.push({
        title: json.ocr_results
          .slice(0, d)
          .map((x: any) => x.text)
          .join('')
          .replace(/[“”\"\!\！]$/, ''),
        authors: ['毛泽东'],
        page_start: i,
        page_end: 0,
        ...extract_dates(json.ocr_results[d].text, { remove_unknowns: true }),
      });
    }
  }
  for (let i = articles.length - 2; i >= 0; --i) {
    articles[i].page_end = articles[i + 1].page_start - 1;
  }
  articles[articles.length - 1].page_end = end;

  const cfg_path = join(__dirname, `./books/maoquanji${volume}.ts`);
  const tscfg = eval(
    `(() => (${fs
      .readFileSync(cfg_path)
      .toString()
      .replace(/export default/, '')
      .trim()
      .replace(/\;$/, '')}))()`,
  );
  tscfg.parser_option = {
    page_limits: [],
    ext: 'pdf',
    articles,
    ocr: {
      content_thresholds: [0.06, 0.06, 0.01, 0.01],
    },
  };
  tscfg.parser_id = 'automation';

  fs.writeFileSync(cfg_path, `export default ${JSON.stringify(tscfg)};`);
  console.log(tscfg.parser_option);
  /*
  const ds = await init();
  const books = await get_books();
  const book = books.find(
    (i) => i.entity.id === 'maoquanji26',
  )!;

  // for (const i of await book.parser(book.path, book.parser_option)) {
  //   console.log(get_article_id(i));
  // }
  console.log(await book.parser(book.path, book.parser_option));
  */
  debugger;
})();
