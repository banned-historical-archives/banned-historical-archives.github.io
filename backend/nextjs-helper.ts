import { readFile, readFileSync } from 'fs-extra';
import { join } from 'path';
import { ArticleIndexes, BookIndexes } from '../types';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const article_indexes = JSON.parse(
  readFileSync(join(process.cwd(), 'article_indexes.json')).toString(),
) as ArticleIndexes;
const book_indexes = JSON.parse(
  readFileSync(join(process.cwd(), 'book_indexes.json')).toString(),
) as BookIndexes;

app.get('/get_article', async (req, res) => {
  const article_id = req.query.id as string;
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
      (await readFile(join(book_path, `${book_id}.bookinfo`))).toString(),
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
  res.json({
    books,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
