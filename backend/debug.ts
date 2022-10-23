import books from './books';
import { join } from 'node:path/posix';
// import { AppDataSource } from './data-source';
import ocr from './ocr';
// import lac from './lac';
// import { LACResult } from '../types';

import { init } from './data-source';
import { get_article_id } from '../utils';
import { normalize } from './utils';
import { basename } from 'node:path';

(async () => {
  const ds = await init();
  const book = books.find(i => i.entity.id === 'becd9f73-f6d4-4f1a-88ac-2fb3b1dfbffa')!;
  const res = await book.parser(book.path, book.parser_option);
  console.log(res.map(i => [i, get_article_id(i)]));

  debugger;
})();