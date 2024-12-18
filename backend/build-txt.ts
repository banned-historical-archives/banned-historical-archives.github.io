import 'reflect-metadata';
import { join } from 'node:path/posix';

import { Any, Brackets, DataSource } from 'typeorm';
import {
  ArticleCategory,
  ArticleIndexes,
  BookConfig,
  ParserResult,
  BookMetaData,
  Tag,
  TagType,
} from '../types';
import { get_article_id, uuid } from '../utils';
import fs, { readFileSync, writeFileSync } from 'fs';
import { ensureDirSync } from 'fs-extra';
import { get_article_indexes } from './get_article_indexes';

/*
  const temp = {
    id: 'xxxx',
    pages: [
      {
        articleId: 'xxxx',
        comment: [
          {
            part_index: 1,
            offset: 1,
            text: 'xxxx'
          }
        ],
        content: [
          {
            type: 'xxxx',
            text: 'xxxx'
          }
        ]
      }
    ]
  }
  */

const article_indexes = get_article_indexes();

Object.keys(article_indexes).forEach((article_id) => {
  for (const book of article_indexes[article_id]) {
    const book_id = book[0];
    const archives_id = 'archives' + book[2];
    const book_metadata = JSON.parse(
      fs
        .readFileSync(
          join(
            __dirname,
            `../parsed/${archives_id}/${book_id.slice(
              0,
              3,
            )}/${book_id}/${book_id}.metadata`,
          ),
        )
        .toString(),
    ) as BookMetaData;
    if ((book_metadata as any).lyrics) continue;
    const article = JSON.parse(
      fs
        .readFileSync(
          join(
            __dirname,
            `../parsed/${archives_id}/${book_id.slice(
              0,
              3,
            )}/${book_id}/${article_id.slice(0, 3)}/${article_id}.json`,
          ),
        )
        .toString(),
    ) as ParserResult;
    const tags = JSON.parse(
      fs
        .readFileSync(
          join(
            __dirname,
            `../parsed/${archives_id}/${book_id.slice(
              0,
              3,
            )}/${book_id}/${article_id.slice(0, 3)}/${article_id}.tags`,
          ),
        )
        .toString(),
    ) as Tag[];

    const content = `id: ${article_id}
标题：${article.title}
日期：${article.dates
      .map((j) => `${j.year || 0}-${j.month || 0}-${j.day || 0}`)
      .join(',')}
是否是时间段：${article.is_range_date}
作者：${article.authors.join(',')}
来源：${article.origin || ''}
标签：${tags?.map((i) => i.name).join(',') || ''}
书籍：${book_metadata.name}
书籍作者：${book_metadata.author}

正文：
${article.parts
  .map((j) => {
    if (j.type === 'title') return `# ${j.text}`;
    else if (j.type === 'subtitle') return `## ${j.text}`;
    else if (j.type === 'subtitle2') return `### ${j.text}`;
    else if (j.type === 'subtitle3') return `#### ${j.text}`;
    else if (j.type === 'quotation') return `> ${j.text}`;
    else return j.text;
  })
  .join('\n\n')}

描述：
${article.description || ''}
`;
    ensureDirSync(join(__dirname, '../txt', book_id, article_id.slice(0, 3)));
    writeFileSync(
      join(
        __dirname,
        '../txt',
        book_id,
        article_id.slice(0, 3),
        `${article_id}.txt`,
      ),
      content,
    );
  }
});
