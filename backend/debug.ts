import books from './books';
import { diff_match_patch } from 'diff-match-patch';
  import {parse} from './parser/wenku'
  import * as xuanji from './parser/xuanji'
  import * as wansui from './parser/wansui_parser'
  import * as wanghongwen1 from './parser/wanghongwen1'
  import * as wanghongwen2 from './parser/wanghongwen2'
  import * as maoyuanxin1 from './parser/maoyuanxin1'
// import { AppDataSource } from './data-source';
import { join } from 'path';
import ocr from './ocr';
// import lac from './lac';
// import { LACResult } from '../types';

import { init } from './data-source';
import {Article,Content,Comment,Page}from './entities';
import { get_article_id } from '../utils';
import { Patch } from '../types';
import { writeFileSync } from 'fs';

type PublicationDetails = {
  [key: string]: {
    comments: Comment[];
    contents: Content[];
    page: Page;
  };
};

(async () => {
  const ds = await init();

  // wanghongwen1
  // wanghongwen2
  // maoyuanxin1

  //const art_idx = 0;
  //const id = 'edff2d1084';
  //const publicationId = 'wanghongwen1';
  //const parser = wanghongwen1.parse;

  //const id = '3d56bd28eb';
  //const publicationId = 'wanghongwen2';
  //const parser = wanghongwen2.parse;

  /*
  const mao = [
    'c958997bf3',
    '462857973c',
    '46fe270dbf',
    'fb340a2cd0',
    '5baba3bb70',
    '325faf3032',
    '3c2a0d2997',
    'fc21523182',
    '7df1e95057',
    '5eb9517882',
  ];
  for (let i =0;i < mao.length; ++i) {
    if (i==2)continue;
 const art_idx = i;
 const id = mao[art_idx];
 const publicationId = 'maoyuanxin1';
 const parser = maoyuanxin1.parse;

  const articleId = id;
  const article = await ds.manager.findOne(Article, {
    where: {
      id,
    },
    relations: {
      authors: true,
      publications: true,
      tags: true,
      dates: true,
    },
  });
  const publication_details: PublicationDetails = {};
  for (const publication of article!.publications) {
    const publicationId = publication.id!;
    const comments = await ds.manager.find(Comment, {
      where: {
        publicationId,
        articleId,
      },
    });
    const contents = await ds.manager.find(Content, {
      where: {
        publicationId,
        articleId,
      },
    });
    const page = (await ds.manager.findOne(Page, {
      where: {
        publicationId,
        articleId,
      },
    }))!;
    publication_details[publicationId] = {
      comments,
      contents,
      page,
    };
  }
  const book = books.find(i => i.entity.id === publicationId)!;
  const res = await parser(book.path, book.parser_option);
  const origin = publication_details[publicationId].contents.sort(
    (a, b) => a.index - b.index,
  );

  console.log(res[art_idx].parts, origin)
  if (res[art_idx].parts.length !== origin.length) {
  console.log(res[art_idx].parts, origin)
  debugger
  }
const patch: Patch = {
  parts: {},
  comments: {},
  description: '',
};
  for (let i = 0; i<res[art_idx].parts.length;  ++i) {
    if (res[art_idx].parts[i].text !== origin[i].text) {
      const diff = new diff_match_patch().diff_main(res[art_idx].parts[i].text, origin[i].text);
      const delta = new diff_match_patch().diff_toDelta(diff);
      patch.parts[origin[i].index.toString()] = delta;
    }
  }

  if (Object.keys(patch.parts).length) {
    const patch_str = `export default [
  // ${decodeURIComponent(JSON.stringify(patch))}
  ${JSON.stringify(patch)},
];`;
    writeFileSync(
      join(__dirname, `../patch/articles/[${id}][${publicationId}].ts`),
      patch_str,
    );
  }
}
*/
  const book = books.find(i => i.entity.id === 'maoyuanxin1')!;
  const res = await book.parser(book.path, book.parser_option);
  console.log(res, get_article_id(res[res.length -1]));
  debugger;
})();