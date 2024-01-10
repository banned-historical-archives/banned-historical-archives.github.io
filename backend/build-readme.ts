import 'reflect-metadata';
import { join } from 'node:path/posix';
import { init } from './data-source';

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
import { DataSource } from 'typeorm';
import { music as musicData } from './music';
import { ArticleCategory, TagType } from '../types';
import { get_article_id, hash_str_arr, uuid } from '../utils';
import { Image, ImageTag } from './entities';
import fs from 'fs';

class Line {
  [x: string]: any;
  constructor(id: any, title: any, author: any, internal: any, official: any) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.internal = internal;
    this.official = official;
    this.status = '未知';
    this.all = 0;
  }
}

const temp: any[] = fs.readdirSync(join(__dirname, './books'), {
  encoding: 'utf-8',
});

let judged: any[] = fs.readdirSync(join(__dirname, '../patch/articles'), {
  encoding: 'utf-8',
});

const map = new Map();

temp.forEach((item: string) => {
  const name = item.replace('.ts', '.js');
  const data = fs.readFileSync(join(__dirname, './books', item), {
    encoding: 'utf-8',
  });
  if (!fs.existsSync(join(__dirname, './temp'))) {
    fs.mkdirSync(join(__dirname, './temp'));
  }
  fs.writeFileSync(join(__dirname, './temp', name), data);
});

const objs: any[] = [];

const dirPath = join(__dirname, '../README.md');
const data = fs.readFileSync(dirPath, { encoding: 'utf-8' });
const mid1 =
  '| ----- | --------------- | -------------- | -------------- | --------- |';
const mid2 = `以及许多未知来源的笔记/讲话记录/文稿/手稿/翻印稿正在录入。`;

const first = data.split(mid1)[0];
const last = data.split(mid2)[1];

init()
  .then(async (AppDataSource) => {
    try {
      const repository = await AppDataSource.getRepository(Publication);
      const all_publications = await repository.find();

      all_publications.forEach((item) => {
        let internal = item.internal ? 'Y' : 'N';
        let official = item.official ? 'Y' : 'N';
        objs.push(
          new Line(item.id, item.name, item.author, internal, official),
        );
      });

      objs.sort((a, b) => {
        if (a.title.length < b.title.length) {
          return -1;
        } else if (a.title.length === b.title.length) {
          return a.title.localeCompare(b.title);
        } else {
          return 1;
        }
      });
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  })
  .then(async () => {
    for (let i = 0; i < temp.length; i++) {
      const article = await import(join(__dirname, './books/', temp[i]));
      temp[i] = article.default;
    }
  })
  .then(() => {
    judged.forEach((item, i) => {
      item = item.replace('.ts', '');
      item = item.split('');
      item.shift();
      item.pop();
      item = item.join('');
      let temp = item.split('][');
      judged[i] = temp[1] + '+' + temp[0];
    });

    const set = new Set(judged);
    judged = Array.from(set);

    judged.forEach((item, i) => {
      let arr = item.split('+');
      judged[i] = {
        id: arr[0],
        articleId: arr[1],
      };
    });
    judged.forEach((item) => {
      if (map.has(item.id)) {
        let value = map.get(item.id);
        map.set(item.id, value + 1);
      } else {
        map.set(item.id, 1);
      }
    });
  })
  .then(() => {
    let status: any;
    temp.forEach((item) => {
      try {
        if (item.parser_option.articles.length === map.get(item.entity.id)) {
          status = '已校对';
        } else if (
          item.parser_option.articles.length !== map.get(item.entity.id) &&
          map.get(item.entity.id) > 0
        ) {
          status = '正在校对';
        } else {
          status = '未校对';
        }
      } catch (err) {
        status = '未知';
      } finally {
        for (let i = 0; i < objs.length; i++) {
          if (objs[i].id === item.entity.id) {
            objs[i].status = status;
            break;
          }
        }
      }
    });
    objs.forEach((item, i) => {
      objs[i] = `${item.title.replace(/[\.]/g, '')}|${item.author}|${
        item.internal
      }|${item.official}|${item.status}`;
    });
    const result = first + mid1 + '\n' + objs.join('\n') + '\n\n' + mid2 + last;
    fs.writeFileSync(dirPath, result);
  })
  .then(() => {
    const arr = fs.readdirSync(join(__dirname, './temp'), {
      encoding: 'utf-8',
    });
    arr.forEach((item) => {
      const name = item.replace('.ts', '.js');
      fs.rmSync(join(__dirname, './temp', name));
    });
    process.exit();
  })
  .catch((error) => console.log(error));
