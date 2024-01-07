import { readFile, readFileSync } from 'fs-extra'
import { join } from 'path'
import { ArticleIndexes } from '../types'
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
const article_indexes = JSON.parse(readFileSync(join(process.cwd(), 'article_indexes.json')).toString()) as ArticleIndexes;

app.get('/get_article', async (
  req,
  res,
) => {
    const article_id = req.query.id as string;
    const book_ids = Object.keys(article_indexes[article_id]);
    const books = [];
    for (const i of book_ids) {
        const archives_id = article_indexes[req.query.id as string][i];
        const book_path = join(process.cwd(), 'public/archives' + archives_id, i.slice(0, 3), i);
        const book = JSON.parse((await readFile(join(book_path, `${i}.bookinfo`))).toString());
        book.article = JSON.parse((await readFile(join(book_path, article_id.slice(0,3), `${article_id}.json`))).toString());
        book.tags = JSON.parse((await readFile(join(book_path, article_id.slice(0,3), `${article_id}.tag`))).toString());
        books.push(book);
    }
    res.json({
        books
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})