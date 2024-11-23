import { ensureDirSync, readFile, readFileSync } from 'fs-extra';
import { join } from 'path';
import { ArticleIndexes, BookIndexes } from '../types';
import { writeFileSync } from 'fs';

const article_indexes = JSON.parse(
  readFileSync(join(process.cwd(), 'article_indexes.json')).toString(),
) as ArticleIndexes;
const book_indexes = JSON.parse(
  readFileSync(join(process.cwd(), 'book_indexes.json')).toString(),
) as BookIndexes;

(async () => {
  const root = join(process.cwd(), 'next_helper');
  ensureDirSync(root);

  for (const article_id of Object.keys(article_indexes)) {
    const book_number_ids = article_indexes[article_id];
    const books = [];
    for (const i of book_number_ids) {
      const archives_id = book_indexes[i][2];
      const book_id = book_indexes[i][0];
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
