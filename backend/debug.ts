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
  // const book = books.find(i => i.entity.id === 'maoquanji30')!;
  // const res = await book.parser(book.path, book.parser_option);
  // console.log(res);

  for (let i = 31;i <= 52; ++i) {

    const pdf_path = join(normalize(__dirname), `../public/books/archives0/mao-quanji/${i}-OCR.pdf`);
    for (let page = 11; page <= 500; ++page) {
      await ocr({
        pdf: pdf_path,
        page,
        cache_path: join(
          normalize(__dirname),
          `./ocr_cache/maoquanji${basename(pdf_path).replace(
            /[^\d]/g,
            '',
          )}/${page}.json`,
        ),
      });
      console.log(i, page);
    }
  }
  debugger;
})();