import { join } from 'node:path/posix';
import { existsSync } from 'node:fs';
import { Book, ParserOption } from '../types';
import * as jinghuo from './parser/jinghuo_parser';
import * as wansui from './parser/wansui_parser';
import * as wenji from './parser/wenji_parser';
import * as jqjianghua from './parser/jqjianghua_parser';
import * as xuanji from './parser/xuanji';
import * as jimi from './parser/jimi';
import * as wenku from './parser/wenku';
import * as maoquanji from './parser/maoquanji';
import * as wanghongwen from './parser/wanghongwen';
import * as yaowenyuan from './parser/yaowenyuan';
import * as zhangchunqiao from './parser/zhangchunqiao';
import * as zzj1 from './parser/zzj1';
import * as automation from './parser/automation';
import { apply_patch, apply_patch_v2, get_article_id } from '../utils';
import { traditionalChineseToSimpleChinese } from '../utils/i18n';
import { exclude, normalize } from './utils';
import fs from 'fs';

const patch_dir = join(normalize(__dirname), '../patch/articles');

const parsers: {[key: string]: any} = {
  jinghuo,
  wansui,
  wenji,
  jqjianghua,
  xuanji,
  jimi,
  wenku,
  maoquanji,
  wanghongwen,
  yaowenyuan,
  zhangchunqiao,
  zzj1,
  automation,
};

function post_script(i: Book) {
  const book: Book = {
    entity: i.entity,
    parser_option: i.parser_option as ParserOption,
    path: join(normalize(__dirname), '../public' + i.path),
    parser_id: i.parser_id,
    parser: async (path: string, opt: ParserOption) => {
      const res = await parsers[i.parser_id].parse(path, opt);
      for (const j in res) {
        const article = res[j];
        for (const part of article.parts) {
          part.text = traditionalChineseToSimpleChinese(part.text);
        }
        for (let i = 0; i < article.comments.length; ++i) {
          article.comments[i] = traditionalChineseToSimpleChinese(
            article.comments[i],
          );
        }
        article.description = traditionalChineseToSimpleChinese(
          article.description,
        );
        const id = get_article_id(article);
        const p = join(patch_dir, `[${id}][${i.entity.id}].ts`);
        if (existsSync(p)) {
          const x = await import(p);
          for (const patch of x.default) {
            if (patch.version === 2) {
              res[j] = apply_patch_v2(res[j], patch);
            } else {
              apply_patch(article, patch);
            }
          }
        }
      }
      return res;
    },
  };
  return book;
}

export async function get_book(id: string) {
  return post_script((await import(`./books/${id}`)).default);
}

export default async function get_books() {
  const files = fs.readdirSync(join(normalize(__dirname), './books'));
  const temp = [];
  for (const file of files) {
    temp.push(await import(`./books/${file}`));
  }
  const books: Book[] = temp.map((i) => i.default);
  return books.map((i) => {
    return post_script(i);
  });
}