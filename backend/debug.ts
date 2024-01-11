import { join } from 'node:path/posix';
// import { AppDataSource } from './data-source';
// import lac from './lac';
// import { LACResult } from '../types';

import { get_article_id, sleep } from '../utils';
import { basename } from 'node:path';
import { Article } from './entities';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import { ContentType, Date, ParserResult } from '../types';

(async () => {
  /*
 for(const book of books) {
  if (book.parser_option?.ocr?.extract_text_from_pdf) {
    const p =join(__dirname, `./ocr_cache/${book.entity.id}`)
    if (fs.existsSync(p))
    fs.rmSync(p, {recursive: true, force: true})
  }
 }
 */
  debugger;
})();
