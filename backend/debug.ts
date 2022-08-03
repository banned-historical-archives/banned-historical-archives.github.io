import books from './books';
  import {parse} from './parser/wenku'
  import * as xuanji from './parser/xuanji'
// import { AppDataSource } from './data-source';
import { join } from 'path';
// import ocr from './ocr';
// import lac from './lac';
// import { LACResult } from '../types';

(async () => {
  // const r = await ocr(join(__dirname, '../public/x.png'));
  // console.log(r);
  /*
  const res = await jinghuo_parser.parse(join(__dirname, '../public/books/1-7.pdf'), [597, 636]);
  const r2 = await lac(res[0].parts.map(i => i.text).join('\n'));
  console.log(r2.sort((a, b) => a.count < b.count ? 1 : -1));
  console.log(
    r2
      .filter(
        (i) =>
          i.text != '\n' &&
          /^(PER)|(ORG)|(LOC)|(nt)|(nz)|(nw)|(nr)|(ns)$/.test(i.type),
      )
      .sort((a, b) => (a.count < b.count ? 1 : -1)),
  );
  console.log(
    r2
      .filter(
        (i) =>
          i.text != '\n' &&
          /^(PER)|(nr)$/.test(i.type),
      )
      .sort((a, b) => (a.count < b.count ? 1 : -1)),
  );
  */
  // const book = books.find(i => i.entity.id === 'wenku')!;
  // const res = await book.parser(book.path, book.parser_option);

  const book = books.find(i => i.entity.id === 'xuanji5')!;
  //const res = await xuanji.parse(book.path, book.parser_option);
  const res = await book.parser(book.path, book.parser_option);
  // await parse(join(__dirname, '../public/TheGPCRdatabase'), {page_limits:[]});

  /*
  const lac_res: LACResult[][] = [];
  for (const p of res) {
    const r2 = await lac(p.parts.map(i => i.text).join(' '));
    lac_res.push(r2);
    console.log(r2.filter(i => /^(PER)|(ORG)|(LOC)|(nt)|(nz)|(nw)|(nr)|(ns)|(n)$/.test(i.type)))
  }
  */
  // console.log(res);
  debugger;
})();