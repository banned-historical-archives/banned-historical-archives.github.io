import 'reflect-metadata';

import esClient from './connect-es';
import { ArticleIndexes, BookIndexes, ParserResult } from '../types';
import { readFileSync } from 'fs';
import { join } from 'path';
import { readJSONSync } from 'fs-extra';
import { sleep } from '../utils';

type ESArticle = {
  article_id: string;
  publication_id: string;
  publication_name: string;
  title: string;
  aliases: string[];
  authors: string[];
  content: string;
};

const article_indexes = JSON.parse(
  readFileSync(join(process.cwd(), 'article_indexes.json')).toString(),
) as ArticleIndexes;
const book_indexes = JSON.parse(
  readFileSync(join(process.cwd(), 'book_indexes.json')).toString(),
) as BookIndexes;

(async () => {
  if (process.argv[process.argv.length - 1] === 'reset') {
    // 清空
    try {
      await esClient.deleteByQuery({
        index: 'article',
        body: {
          query: {
            match_all: {},
          },
        },
      });
    } catch (e) {}
  } else {
    while (true) {
      try {
        const countResult = await esClient.count({
          index: 'article',
        });
        if (countResult.count != 0) {
          console.log('article not empty');
          return;
        }
        await sleep(1000);
        break;
      } catch (e) {
        console.log(e);
      }
    }
  }

  const es_articles: ESArticle[] = [];
  let t = 0;

  const total = Object.keys(article_indexes).length;
  for (const article_id of Object.keys(article_indexes)) {
    for (const book_number_id of article_indexes[article_id]) {
      const book = book_indexes[book_number_id];
      const [book_id, book_name, archive_id] = book;
      const article = readJSONSync(
        join(
          __dirname,
          '../parsed/archives' + archive_id,
          book_id.slice(0, 3),
          book_id,
          article_id.slice(0, 3),
          article_id + '.json',
        ),
      ) as ParserResult;
      const es_article: ESArticle = {
        article_id,
        publication_id: book[0],
        publication_name: book[1],
        authors: article.authors,
        title: article.title,
        aliases: [],
        content:
          article.description +
          article.parts.map((j) => j.text).join('\n') +
          article.comments.map((j) => j).join('\n'),
      };
      es_articles.push(es_article);
      await esClient.index({
        index: 'article',
        id: `${article_id}-${book_id}`,
        document: es_article,
      });
    }
    console.log(`${++t}/${total}`);
  }
})();
