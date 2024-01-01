import { join } from 'node:path/posix';
import * as maoistlegacy_proofread from './parser/maoistlegacy-proofread';
import { existsSync } from 'node:fs';
import { Book, ParserOption, ParserResult, TagType } from '../types';
import * as jinghuo from './parser/jinghuo_parser';
import * as wenji from './parser/wenji_parser';
import * as jqjianghua from './parser/jqjianghua_parser';
import * as wengeqianqixinianlu1 from './parser/wengeqianqixinianlu1';
import * as chuanxinlu from './parser/chuanxinlu';
import * as xuanji from './parser/xuanji';
import * as jimi from './parser/jimi';
import * as qibenyu from './parser/qibenyu';
import * as maoquanji from './parser/maoquanji';
import * as wanghongwen from './parser/wanghongwen';
import * as yaowenyuan from './parser/yaowenyuan';
import * as zhangchunqiao from './parser/zhangchunqiao';
import * as CCRD from './parser/CCRD';
import * as maoistlibrary from './parser/maoistlibrary';
import * as zzj1 from './parser/zzj1';
import * as rmrb from './parser/rmrb';
import * as automation from './parser/automation';
import { apply_patch, apply_patch_v2, get_article_id } from '../utils';
import { traditionalChineseToSimpleChinese } from '../utils/i18n';
import { exclude, normalize } from './utils';
import fs from 'fs';

const patch_dir = join(normalize(__dirname), '../patch/articles');

const parsers: { [key: string]: any } = {
  jinghuo,
  wenji,
  CCRD,
  maoistlibrary,
  jqjianghua,
  qibenyu,
  rmrb,
  xuanji,
  wengeqianqixinianlu1,
  chuanxinlu,
  jimi,
  maoquanji,
  wanghongwen,
  yaowenyuan,
  zhangchunqiao,
  zzj1,
  automation,
  'maoistlegacy-proofread': maoistlegacy_proofread,
};

function post_script(i: Book) {
  const book: Book = {
    entity: i.entity,
    parser_option: i.parser_option as ParserOption,
    path: join(normalize(__dirname), '../public' + i.path),
    parser_id: i.parser_id,
    parser: async (path: string, opt: ParserOption) => {
      const res = await parsers[i.parser_id].parse(path, opt);
      let t = 0;
      for (const j in res) {
        const article = res[j] as ParserResult;
        if (opt.articles && opt.articles[t] && opt.articles[t].tags) {
          if (!article.tags) article.tags = [];
          for (const tag of opt.articles![t].tags!) {
            article.tags.push({
              name: tag.name,
              type: TagType[tag.type],
            });
          }
        }
        ++t;
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
  const temp = await Promise.all(files.map(file => import(`./books/${file}`)));
  const books: Book[] = temp
    .map((i) => i.default)
    .concat(await maoistlegacy_proofread.get_books());
  return books.map((i) => {
    return post_script(i);
  });
}
