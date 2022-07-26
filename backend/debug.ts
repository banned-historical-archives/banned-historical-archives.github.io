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
  const book = books.find(i => i.entity.id === '61612ccb-a285-40a9-a563-c70499cdd364')!;
  const res = await book.parser(book.path, book.parser_option);
  console.log(res.map(i => [i, get_article_id(i)]));

  debugger;
})();  