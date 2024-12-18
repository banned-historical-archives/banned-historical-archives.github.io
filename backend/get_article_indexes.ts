import { readFileSync } from 'fs';
import { join } from 'path';
import { ArticleIndexes, ArticleIndexesWithBookInfo } from '../types';

export function get_article_indexes(): ArticleIndexesWithBookInfo {
  const fc = JSON.parse(
    readFileSync(join(process.cwd(), 'indexes', 'file_count.json')).toString(),
  ) as {
    article_list: number;
  };

  const res: ArticleIndexesWithBookInfo = {};
  for (let i = 0; i < fc.article_list; ++i) {
    const part = JSON.parse(
      readFileSync(
        join(
          process.cwd(),
          'indexes',
          'article_list_with_book_info_' + i + '.json',
        ),
      ).toString(),
    ) as [number, [string, string, number][]];
    part.forEach((j: any) => {
      res[j[0]] = j[1];
    });
  }
  return res;
}
