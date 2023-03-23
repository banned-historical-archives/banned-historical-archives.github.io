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

(async () => {
  const ds = await init();
  const books = await get_books();
  const book = books.find(
    (i) => i.entity.id === 'GPCRv3',
  )!;

  for (const i of await book.parser(book.path, book.parser_option)) {
    console.log(get_article_id(i));
  }
  console.log(await book.parser(book.path, book.parser_option));

  debugger;
})();
