import books from './books';
// import { AppDataSource } from './data-source';
import ocr from './ocr';
// import lac from './lac';
// import { LACResult } from '../types';

import { init } from './data-source';
import { get_article_id } from '../utils';

(async () => {
  const ds = await init();
  const book = books.find(i => i.entity.id === 'maoquanji30')!;
  const res = await book.parser(book.path, book.parser_option);
  console.log(res);
  debugger;
})();