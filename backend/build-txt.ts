import 'reflect-metadata';
import { join } from 'node:path/posix';
import { init } from './data-source';

import Publication from './entity/publication';
import Tag from './entity/tag';
import Page from './entity/page';
import { get_article_types, get_tags } from './classifier';
import { Any, Brackets, DataSource } from 'typeorm';
import { music as musicData } from './music';
import {
  ArticleCategory,
  ArticleIndexes,
  Book,
  ParserResult,
  TagType,
} from '../types';
import { get_article_id, hash_str_arr, uuid } from '../utils';
import { Image, ImageTag } from './entities';
import fs, { readFileSync, writeFileSync } from 'fs';
import { ensureDirSync } from 'fs-extra';

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

const article_indexes = JSON.parse(
  readFileSync(join(process.cwd(), 'article_indexes.json')).toString(),
) as ArticleIndexes;

Object.keys(article_indexes).forEach((article_id) => {
  for (const book_id of Object.keys(article_indexes[article_id])) {
    const archives_id = 'archives' + article_indexes[article_id][book_id];
    const book_info = JSON.parse(
      fs
        .readFileSync(
          join(
            __dirname,
            `../parsed/${archives_id}/${book_id.slice(
              0,
              3,
            )}/${book_id}/${book_id}.bookinfo`,
          ),
        )
        .toString(),
    ) as Publication;
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
书籍：${book_info.name}
书籍作者：${book_info.author}

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
