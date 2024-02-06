import { join } from 'node:path/posix';
// import { AppDataSource } from './data-source';
// import lac from './lac';
// import { LACResult } from '../types';

import { get_article_id, sleep, uuid } from '../utils';
import { basename } from 'node:path';
import fs from 'fs-extra';
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
// for(const j of music) {
//  const i = j as any;
//  i.id= uuid();
//  fs.writeFileSync(join(__dirname, '../config/archives6/' + i.id + '.ts'), `export default {
//  "resource_type": "music",
//  "entity": ${JSON.stringify(i)},
//  "version": 2
//}`)
// }
  debugger;
})();
