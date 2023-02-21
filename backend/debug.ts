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
  const book = books.find((i) => i.entity.id === '4487f711-d1dc-4c33-a1a9-50a1b7f7d659')!;


  console.log(get_article_id((await book.parser(book.path, book.parser_option))[0]))
  // console.log(await book.parser(book.path, book.parser_option));

  debugger;
  // parse(join(__dirname, '../a'), 'zs.ts');
  // parse(join(__dirname, '../l'), 'lb.ts');
  // bydir(join(__dirname, '../x/第三版 江青 张春桥 姚文元 王洪文/王洪文'), '王洪文', 'whw.x');
  // bydir(join(__dirname, '../x/第三版 江青 张春桥 姚文元 王洪文/张春桥'), '张春桥', 'zcq.x');
  // bydir(join(__dirname, '../x/第三版 江青 张春桥 姚文元 王洪文/姚文元'), '姚文元', 'ywy.x');
  // bydir(join(__dirname, '../x/第三版新材料 文革期间 66、68  四，中央首长关于文化大革命的讲话和指示 部分'), '', 'others-c.x');
  // bydir(join(__dirname, '../x/b'), '', 'others-b.x');
  // bydir(join(__dirname, '../x/a'), '', 'others-a.x');
})();
