import 'reflect-metadata';
import { join } from 'node:path/posix';
import { init } from './data-source';

import get_books from './books';
import images from './images';
import Article from './entity/article';
import Author from './entity/author';
import Date from './entity/date';
import Music from './entity/music';
import Lyric from './entity/lyric';
import Audio from './entity/audio';
import Alias from './entity/alias';
import Content from './entity/content';
import Comment from './entity/comment';
import Publication from './entity/publication';
import Tag from './entity/tag';
import Page from './entity/page';
import { get_article_types, get_tags } from './classifier';
import { Any, Brackets, DataSource } from 'typeorm';
import { music as musicData } from './music';
import { ArticleCategory, TagType } from '../types';
import { get_article_id, hash_str_arr, uuid } from '../utils';
import { Image, ImageTag } from './entities';
import { normalize } from './utils';
import fs from 'fs';
import { ensureDirSync } from 'fs-extra';

init()
.then(async (AppDataSource) => {
  const data: any[] = []

  const publication = await AppDataSource.getRepository(Publication);
  const all_publications = await publication.find({ relations: ["pages"] })

  const comment = await AppDataSource.getRepository(Comment).createQueryBuilder()

  const content = await AppDataSource.getRepository(Content).createQueryBuilder()

  /**
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

  all_publications.forEach(item => {
    const pages: any[] = []
    item.pages.forEach((it, i) => {
        pages[i] = {
            articleId: it.articleId,
        }
    })
    data.push({
        id: item.id,
        pages: pages,
    })
  })

  try {
    // 拿注释
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].pages.length; j++) {
          // articleId = ? AND (`index` != -1 OR `part_index` != -1 OR `offset` != -1) order by `index`
          let obj = await comment
              .where('articleId = :articleId', { articleId: data[i].pages[j].articleId })
              .andWhere(new Brackets(qb => {
                  qb.where('`index` != :index', { index: -1 })
                      .orWhere('part_index != :part_index', { part_index: -1 })
                      .orWhere('`offset` != :offset', { offset: -1 })
              }))
              .orderBy('`index`', 'ASC')
              .getMany()
          const [...temp1] = obj
          data[i].pages[j].comment = temp1
      }
    }

    // 拿正文
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].pages.length; j++) {
        // articleId = ? AND publicationID = ? order by `index`
        let obj = await content
            .where('articleId = :articleId', { articleId: data[i].pages[j].articleId })
            .andWhere('publicationID = :publicationID', { publicationID: data[i].id })
            .orderBy('`index`', 'ASC')
            .getMany()
        data[i].pages[j].content = new Array()
        obj.forEach(item => {
          data[i].pages[j].content.push({
            type: item.type,
            text: item.text,
          })
        })

          // 处理正文内注释符
        if (data[i].pages[j].comment) {
          for (let m = data[i].pages[j].comment.length - 1; m >= 0; m--) {
            let index = data[i].pages[j].comment[m].index
            let part_index = data[i].pages[j].comment[m].part_index
            let offset = data[i].pages[j].comment[m].offset
            if (part_index === -99 && offset === -99) {
              continue
            } else {
              try {
                if (data[i].pages[j].content[part_index].text !== undefined) {
                  let str = data[i].pages[j].content[part_index].text
                  str = str.split('')
                  str.splice(offset, 0, `〔${ index }〕`)
                  str = str.join('')
                  data[i].pages[j].content[part_index].text = str
                } else {
                  data[i].pages[j].content[part_index].text = ''
                }
              } catch (err) {
                console.log('处理失败！文章 id：' + data[i].pages[j].articleId + '等待校对！')
              }
            }
          }
        }
      }
    }
  } catch(err) {
    console.log(err)
  }

  console.log('init');
  const ds = await init();
  console.log('get books');
  const books = await get_books();
  console.log('books length', books.length);
  for (const book of books) {
    console.log(book.entity.name);
    const res = await book.parser(book.path, book.parser_option);
    const dirPath = join(
      __dirname,
      `../txt/${book.entity.name?.replace(/\//g, '').replace(/\*/g, '')}`,
    );
    for (const i of res) {
      const id = get_article_id(i);
      ensureDirSync(dirPath);

      let content_arr: any[] = []
      data.forEach(item => {
        if (item.id === book.entity.id) {
          item.pages.forEach((it: { articleId: string; content: any[]; }) => {
            if (it.articleId === id) {
              [...content_arr] = it.content
            }
          })
        }
      })

      fs.writeFileSync(
        join(dirPath, `${i.title.replace(/\//g, '').replace(/\*/g, '').substring(0, 50)}[${id}]`),
        `id: ${id}
标题：${i.title}
日期：${i.dates
          .map((j) => `${j.year || 0}-${j.month || 0}-${j.day || 0}`)
          .join(',')}
是否是时间段：${i.is_range_date}
作者：${i.authors.join(',')}
来源：${i.origin || ''}
标签：${i.tags?.map((i) => i.name).join(',') || ''}
书籍：${book.entity.name}
书籍作者：${book.entity.author}

正文：
${content_arr.map((j) => {
  if (j.type === 'title') return (`# ${ j.text }`)
  else if (j.type === 'subtitle') return (`## ${ j.text }`)
  else if (j.type === 'subtitle2') return (`### ${ j.text }`)
  else if (j.type === 'subtitle3') return (`#### ${ j.text }`)
  else if (j.type === 'quotation') return (`> ${ j.text }`)
  else return j.text
}).join('\n\n')}

描述：
${i.description || ''}

注释：
${i.comments.map((j, idx) => `〔${idx + 1}〕 ${j}`).join('\n\n')}
`,
      );
    }
    console.log('parsed', book.entity.name, 'length:', res.length);
  }
  console.log('done');
  process.exit();
})
