import fs from 'fs-extra';
import { join, parse } from 'path';
import JSON5 from 'json5';
import {
  ArticleIndexes,
  BookCatelog,
  BookIndexes,
  MusicMetaData,
  MusicIndexes,
  TagIndexes,
  ResourceMetaData,
  BookMetaData,
  Config,
  GalleryIndexes,
  PictureMetaData,
  VideoMetaData,
} from '../types';

type BookCatelogTemp = {
  [article_id: string]: {
    title: string;
    authors: string[];
    dates: any;
    is_range_date: boolean;
    tag_ids: number[];
    book_ids: number[];
  };
};
const gallery_indexes: GalleryIndexes = [];
const music_indexes: MusicIndexes = [];
const music_indexes_temp: any[] = [];
const book_catelog_temp: BookCatelogTemp = {};
const article_indexes: ArticleIndexes = {};
const tag_cache: { [type: string]: { [name: string]: number } } = {};
const article_tag_cache = {};
const tag_indexes: TagIndexes = [];
const book_indexes_cache: {
  [id: string]: { name: string; archive_id: number; number_id: number };
} = {};
const book_indexes: BookIndexes = [];
const catelog_tags_cache: {
  [article_id: string]: { [tag_id: string]: boolean };
} = {};

function catelog_temp_to_catelog(c: BookCatelogTemp): BookCatelog {
  return Object.keys(c).map((i) => {
    const a = c[i];
    return {
      id: i,
      ...a,
    };
  });
}
(async () => {
  let n_book = 0;
  let n_tag = 0;
  for (let i = 0; i <= 30; ++i) {
    const p = join(__dirname, '../parsed/archives' + i);
    console.log(p);
    if (!(await fs.pathExists(p))) continue;
    for (const prefix of (await fs.readdir(p)).filter(
      (i) => !i.startsWith('.') && !i.endsWith('.md'),
    )) {
      for (const resource of await fs.readdir(join(p, prefix))) {
        console.log('resource', resource);
        const flist = await fs.readdir(join(p, prefix, resource));

        const metadata_path = join(p, prefix, resource, resource + '.metadata');
        const metadata = JSON.parse(
          (await fs.readFile(metadata_path)).toString(),
        ) as ResourceMetaData;

        const cfg = JSON5.parse(
          (
            await fs.readFile(
              join(__dirname, `../config/archives${i}/${metadata.id}.ts`),
            )
          )
            .toString()
            .replace('export default', '')
            .replace(/\;\s*$/, ''),
        ) as Config;

        if (cfg.resource_type === 'music') {
          const music_metadata = metadata as MusicMetaData;
          music_indexes_temp.push([metadata.id, metadata.name, i, music_metadata.lyrics.length])
        } else if (cfg.resource_type === 'video') {
          gallery_indexes.push(metadata as VideoMetaData);
        } else if (cfg.resource_type === 'picture') {
          gallery_indexes.push(metadata as PictureMetaData);
        } else if (cfg.resource_type === 'book') {
          const bookMetaData = metadata as BookMetaData;
          const prefix2_list = flist.filter((x) => !x.endsWith('.metadata'));

          for (const prefix2 of prefix2_list) {
            for (const article_file of (
              await fs.readdir(join(p, prefix, resource, prefix2))
            ).filter((x) => x.endsWith('.json'))) {
              const article_id = parse(article_file).name;
              const article = JSON.parse(
                (
                  await fs.readFile(
                    join(p, prefix, resource, prefix2, article_file),
                  )
                ).toString(),
              );
              const tags = JSON.parse(
                (
                  await fs.readFile(
                    join(p, prefix, resource, prefix2, `${article_id}.tags`),
                  )
                ).toString(),
              ) as { type: string; name: string }[];
              if (!book_catelog_temp[article_id])
                book_catelog_temp[article_id] = {
                  title: article.title,
                  dates: article.dates,
                  authors: article.authors,
                  is_range_date: article.is_range_date,
                  tag_ids: [],
                  book_ids: [],
                };
              tags.forEach((tag) => {
                if (!tag_cache[tag.type]) tag_cache[tag.type] = {};
                if (!catelog_tags_cache[article_id]) {
                  catelog_tags_cache[article_id] = {};
                }
                if (tag_cache[tag.type][tag.name] == undefined) {
                  tag_indexes.push([tag.type, tag.name]);
                  tag_cache[tag.type][tag.name] = n_tag;
                  if (catelog_tags_cache[article_id][n_tag] == undefined) {
                    catelog_tags_cache[article_id][n_tag] = true;
                    book_catelog_temp[article_id].tag_ids.push(n_tag);
                  }
                  n_tag++;
                } else {
                  const x = tag_cache[tag.type][tag.name];
                  if (catelog_tags_cache[article_id][x] == undefined) {
                    catelog_tags_cache[article_id][x] = true;
                    book_catelog_temp[article_id].tag_ids.push(x);
                  }
                }
              });
              if (!article_indexes[article_id]) {
                article_indexes[article_id] = [];
              }
              if (!book_indexes_cache[bookMetaData.id]) {
                book_indexes_cache[bookMetaData.id] = {
                  name: bookMetaData.name,
                  archive_id: i,
                  number_id: n_book,
                };
                book_indexes.push([bookMetaData.id, bookMetaData.name, i]);
                book_catelog_temp[article_id].book_ids.push(n_book);
                article_indexes[article_id].push(n_book);
                ++n_book;
              } else {
                book_catelog_temp[article_id].book_ids.push(
                  book_indexes_cache[bookMetaData.id].number_id,
                );
                article_indexes[article_id].push(
                  book_indexes_cache[bookMetaData.id].number_id,
                );
              }
            }
          }
        }
      }
    }
  }
  fs.writeFileSync(
    join(__dirname, '../book_catelog.json'),
    JSON.stringify(catelog_temp_to_catelog(book_catelog_temp)),
  );
  fs.writeFileSync(
    join(__dirname, '../tag_indexes.json'),
    JSON.stringify(tag_indexes),
  );
  fs.writeFileSync(
    join(__dirname, '../gallery_indexes.json'),
    JSON.stringify(gallery_indexes),
  );
  fs.writeFileSync(
    join(__dirname, '../music_indexes.json'),
    JSON.stringify(music_indexes_temp.sort((a,b) => b[3] - a[3]).map(i => [i[0],i[1],i[2]])),
  );
  fs.writeFileSync(
    join(__dirname, '../book_indexes.json'),
    JSON.stringify(book_indexes),
  );
  fs.writeFileSync(
    join(__dirname, '../article_indexes.json'),
    JSON.stringify(article_indexes),
  );
})();
