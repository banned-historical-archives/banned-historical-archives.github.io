import get_books from './books';
import { join } from 'path';
import { init } from './data-source';
import { get_article_id, sleep } from '../utils';
import fs from 'fs';
import { ensureDirSync } from 'fs-extra';

(async () => {
  console.log('init');
  const ds = await init();
  console.log('get books');
  const books = await get_books();
  console.log('books length', books.length);
  for (const book of books) {
    console.log(book.entity.name);
    const res = await book.parser(book.path, book.parser_option);
    for (const i of res) {
      const id = get_article_id(i);
      ensureDirSync(join(__dirname, '../txt/' + id.substring(0, 3)));
      fs.writeFileSync(
        join(__dirname, '../txt/' + id.substring(0, 3) + '/' + id),
        `id: ${id}
标题：${i.title}
日期：${i.dates
          .map((j) => `${j.year || 0}-${j.month || 0}-${j.day || 0}`)
          .join(',')}
是否是时间段：${i.is_range_date}
作者：${i.authors.join(',')}
来源：${i.origin}
描述：${i.description}
标签：${i.tags?.map((i) => i.name).join(',')}
书籍：${book.entity.name}
书籍作者：${book.entity.author}

${i.parts.map((j) => j.text).join('\n')}

[注释]
${i.comments.map((j, idx) => `[${idx}]${j}`).join('\n')}
`,
      );
    }
    console.log('parsed', book.entity.name, 'length:', res.length);
  }
  console.log('done');
  process.exit();
})();
