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

(async () => {
  const ds = await init();
  const books = await get_books();
  console.log(books);
  const book = books.find(i => i.entity.id === 'zhangchunqiao')!;
  console.log(book)

  debugger;
})();  