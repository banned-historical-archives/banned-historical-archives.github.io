import { join } from 'node:path/posix';
import crypto from 'crypto';
// import { AppDataSource } from './data-source';
// import lac from './lac';
// import { LACResult } from '../types';

import { crypto_md5, get_article_id, md5, sleep, uuid } from '../utils';
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
 for(const j of images) {
  const i = j as any;
  fs.writeFileSync(join(__dirname, '../config/archives7/' + i.id + '.ts'), `export default {
  "resource_type": "picture",
  "entity": ${JSON.stringify(i)},
  "version": 2
}`)
 }
 */

  for (const i of ['几天', '，1', '，3']) console.log(md5(i), crypto_md5(i));
  debugger;
})();
