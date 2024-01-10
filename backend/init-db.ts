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
import { normalize } from './utils';
import { readdirSync } from 'node:fs';

async function init_articles(AppDataSource: DataSource) {
  const patchFiles = readdirSync(
    join(normalize(__dirname), '../patch/articles'),
  ).reduce((a, b) => {
    a[b.substring(0, b.indexOf('.'))] = true;
    return a;
  }, {} as { [k: string]: boolean });
  /*
  const books = await get_books();
  for (const book of books) {
    console.log(book.entity.name);
    const publication_id = book.entity.id!;
    const res = await book.parser(book.path, book.parser_option);
    console.log('parsed', book.entity.name, 'length:', res.length);

    await AppDataSource.manager.upsert(Publication, book.entity, ['id']);

    for (const r of res) {
      const article_id = get_article_id(r);
      await AppDataSource.manager.upsert(
        Article,
        {
          id: article_id,
          title: r.title,
          is_range_date: r.is_range_date,
          origin: r.origin || '',
        },
        ['id'],
      );
      delete patchFiles[`[${article_id}][${publication_id}]`];

      await AppDataSource.createQueryBuilder()
        .relation(Article, 'publications')
        .of(article_id)
        .add(publication_id)
        .catch((e) => {});

      for (const author_name of r.authors) {
        const author_id = hash_str_arr([author_name]);
        await AppDataSource.manager.upsert(
          Author,
          {
            id: author_id,
            name: author_name,
          },
          ['id'],
        );
        await AppDataSource.createQueryBuilder()
          .relation(Article, 'authors')
          .of(article_id)
          .add(author_id)
          .catch((e) => {});
      }

      let date_index = 0;
      for (const date of r.dates) {
        await AppDataSource.manager.upsert(
          Date,
          {
            id: hash_str_arr([article_id, JSON.stringify(date)]),
            index: date_index,
            year: date.year,
            month: date.month,
            day: date.day,
            articleId: article_id,
          },
          ['id'],
        );
        date_index++;
      }

      if (r.alias) {
        await AppDataSource.manager.upsert(
          Alias,
          {
            id: hash_str_arr([article_id, r.alias]),
            name: r.alias!,
            articleId: article_id,
          },
          ['id'],
        );
      }

      const tags: { name: string; type: TagType }[] = (r.tags || []).concat(
        await get_tags(r),
      );
      const article_types = await get_article_types(r);
      article_types.forEach((i) =>
        tags.push({ name: i, type: TagType.articleType }),
      );
      for (const t of tags) {
        const id = hash_str_arr([t.type, t.name]);
        await AppDataSource.manager.upsert(
          Tag,
          {
            id,
            name: t.name,
            type: t.type,
          },
          ['id'],
        );
        await AppDataSource.createQueryBuilder()
          .relation(Article, 'tags')
          .of(article_id)
          .add(id)
          .catch((e) => {});
      }

      for (let idx = 0; idx < r.parts.length; ++idx) {
        const part = r.parts[idx];
        await AppDataSource.manager.upsert(
          Content,
          {
            id: hash_str_arr([article_id, publication_id, idx.toString()]),
            index: idx,
            text: part.text,
            type: part.type,
            publicationId: publication_id,
            articleId: article_id,
          },
          ['id'],
        );
      }

      for (let i = r.comments.length - 1; i >= 0; --i) {
        const pivot = r.comment_pivots.find((x) => x.index === i + 1);
        await AppDataSource.manager.upsert(
          Comment,
          {
            id: hash_str_arr([article_id, publication_id, (i + 1).toString()]),
            text: r.comments[i],
            index: i + 1,
            part_index: pivot ? pivot.part_idx : -99,
            offset: pivot ? pivot.offset : -99,
            publicationId: publication_id,
            articleId: article_id,
          },
          ['id'],
        );
      }
      if (r.description) {
        await AppDataSource.manager.upsert(
          Comment,
          {
            id: hash_str_arr([article_id, publication_id, (-1).toString()]),
            text: r.description,
            index: -1,
            part_index: -1,
            offset: -1,
            publicationId: publication_id,
            articleId: article_id,
          },
          ['id'],
        );
      }

      await AppDataSource.manager.upsert(
        Page,
        {
          id: hash_str_arr([
            article_id,
            publication_id,
            r.page_start.toString(),
            r.page_end.toString(),
          ]),
          start: r.page_start,
          end: r.page_end,
          publicationId: publication_id,
          articleId: article_id,
        },
        ['id'],
      );
    }
    console.log('done', book.entity.name);
  }
  */
  if (Object.keys(patchFiles).length) {
    console.log(patchFiles);
    throw new Error('found unused patch files');
  }
}

async function init_music(AppDataSource: DataSource) {
  for (const music of musicData) {
    const id = hash_str_arr([music.name]);
    await AppDataSource.manager.upsert(
      Music,
      {
        id,
        name: music.name,
        description: music.description,
        composer: music.composer,
      },
      ['id'],
    );
    for (const lyric of music.lyrics) {
      const lid = hash_str_arr([lyric.content]);
      await AppDataSource.manager.upsert(
        Lyric,
        {
          id: lid,
          content: lyric.content,
          lyricist: lyric.lyricist,
          version: lyric.version,
        },
        ['id'],
      );
      await AppDataSource.createQueryBuilder()
        .relation(Music, 'lyrics')
        .of(id)
        .add(lid)
        .catch((e) => {});
      for (const audio of lyric.audios) {
        const aid = hash_str_arr([audio.url]);
        await AppDataSource.manager.upsert(
          Audio,
          {
            id: aid,
            artist: audio.artist,
            source: audio.source,
            url: audio.url,
          },
          ['id'],
        );
        await AppDataSource.createQueryBuilder()
          .relation(Lyric, 'audios')
          .of(lid)
          .add(aid)
          .catch((e) => {});
      }
    }
  }
}

async function init_images(AppDataSource: DataSource) {
  for (const image of images) {
    await AppDataSource.manager.upsert(
      Image,
      {
        id: image.id,
        name: image.name,
        source: image.source,
        description: image.description,
        show_in_gallery: image.show_in_gallery,
        url: image.url,
        year: image.year,
        month: image.month,
        day: image.day,
      },
      ['id'],
    );
    for (const tag of image.tags) {
      const id = hash_str_arr([tag.type, tag.name]);
      await AppDataSource.manager.upsert(
        ImageTag,
        {
          id,
          type: tag.type,
          name: tag.name,
        },
        ['id'],
      );
      await AppDataSource.createQueryBuilder()
        .relation(Image, 'tags')
        .of(image.id)
        .add(id)
        .catch((e) => {});
    }
  }
}

init()
  .then(async (AppDataSource) => {
    try {
      for (const entity of await AppDataSource.entityMetadatas) {
        const repository = await AppDataSource.getRepository(entity.name);
        await repository.query(`SET FOREIGN_KEY_CHECKS=OFF`);
        await repository.query(`DELETE FROM ${entity.tableName};`);
        await repository.query(`SET FOREIGN_KEY_CHECKS=ON`);
      }
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }

    try {
      await init_images(AppDataSource);
      await init_articles(AppDataSource);
      await init_music(AppDataSource);
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
    process.exit();
  })
  .catch((error) => console.log(error));
