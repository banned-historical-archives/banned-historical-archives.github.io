import { ensureDirSync, readFile, readFileSync } from 'fs-extra';
import { join } from 'path';
import { ArticleIndexesWithBookInfo } from '../types';
import { writeFileSync } from 'fs';
import { get_article_indexes } from './get_article_indexes';

const article_indexes = get_article_indexes();

(async () => {
  const root = join(process.cwd(), 'json');
  ensureDirSync(root);

  for (const article_id of Object.keys(article_indexes)) {
    const book_arr = article_indexes[article_id];
    const books = [];
    for (const i of book_arr) {
      const archives_id = i[2];
      const book_id = i[0];
      const book_path = join(
        process.cwd(),
        'parsed/archives' + archives_id,
        book_id.slice(0, 3),
        book_id,
      );
      const book = JSON.parse(
        (await readFile(join(book_path, `${book_id}.metadata`))).toString(),
      );
      book.article = JSON.parse(
        (
          await readFile(
            join(book_path, article_id.slice(0, 3), `${article_id}.json`),
          )
        ).toString(),
      );
      book.tags = JSON.parse(
        (
          await readFile(
            join(book_path, article_id.slice(0, 3), `${article_id}.tags`),
          )
        ).toString(),
      );
      books.push(book);
    }

    ensureDirSync(join(root, article_id.slice(0, 3)));
    writeFileSync(
      join(root, article_id.slice(0, 3), article_id + '.json'),
      JSON.stringify({
        books,
      }),
    );
  }
})();
