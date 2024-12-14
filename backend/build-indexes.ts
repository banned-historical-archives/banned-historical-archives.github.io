import fs from 'fs-extra';
import { join, parse } from 'path';
import JSON5 from 'json5';
import {
  ArticleIndexes,
  ArticleList,
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

type ArticleMap = {
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
const article_map: ArticleMap = {};
const article_indexes: ArticleIndexes = {};
const tag_cache: { [type: string]: { [name: string]: number } } = {};
const tag_indexes: TagIndexes = [];
const book_indexes_cache: {
  [id: string]: { name: string; archive_id: number; number_id: number };
} = {};
const book_indexes: BookIndexes = [];
const catelog_tags_cache: {
  [article_id: string]: { [tag_id: string]: boolean };
} = {};

function article_map_to_list(c: ArticleMap): ArticleList {
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
          music_indexes.push([
            metadata.id,
            metadata.name,
            i,
            music_metadata.lyrics.length,
            music_metadata.tags || [],
            music_metadata.composers,
            Array.from(
              music_metadata.lyrics.reduce((m, i) => {
                i.lyricists.forEach((x) => m.add(x));
                return m;
              }, new Set<string>()),
            ),
            Array.from(
              music_metadata.lyrics.reduce((m, i) => {
                for (const x of i.audios) {
                  for (const y of x.artists) {
                    m.add(y.name + '&' + y.type);
                  }
                }
                return m;
              }, new Set<string>()),
            ).map((i) => ({ name: i.split('&')[0], type: i.split('&')[1] })),
            Array.from(
              music_metadata.lyrics.reduce((m, i) => {
                for (const x of i.audios) {
                  for (const y of x.sources) {
                    m.add(y);
                  }
                }
                return m;
              }, new Set<string>()),
            ),
            Array.from(
              music_metadata.lyrics.reduce((m, i) => {
                for (const x of i.audios) {
                  for (const j of x.art_forms) m.add(j);
                }
                return m;
              }, new Set<string>()),
            ),
          ]);
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
              if (!article_map[article_id])
                article_map[article_id] = {
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
                    article_map[article_id].tag_ids.push(n_tag);
                  }
                  n_tag++;
                } else {
                  const x = tag_cache[tag.type][tag.name];
                  if (catelog_tags_cache[article_id][x] == undefined) {
                    catelog_tags_cache[article_id][x] = true;
                    article_map[article_id].tag_ids.push(x);
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
                article_map[article_id].book_ids.push(n_book);
                article_indexes[article_id].push(n_book);
                ++n_book;
              } else {
                article_map[article_id].book_ids.push(
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


  const article_list = article_map_to_list(article_map);
  const chunk_size = 10000;
  fs.writeFileSync(
    join(__dirname, '../indexes/file_count.json'),
    JSON.stringify({
      book: Math.floor(article_list.length / chunk_size)
    }),
  );
  for (let i = 0; i < Math.floor(article_list.length / chunk_size); i ++) {
    fs.writeFileSync(
      join(__dirname, `../indexes/article_list_${i}.json`),
      JSON.stringify(article_list.slice(i * chunk_size, (i + 1) * chunk_size)),
    );
  }

  fs.writeFileSync(
    join(__dirname, '../indexes/tags.json'),
    JSON.stringify(tag_indexes),
  );
  fs.writeFileSync(
    join(__dirname, '../indexes/gallery.json'),
    JSON.stringify(gallery_indexes),
  );
  fs.writeFileSync(
    join(__dirname, '../indexes/music.json'),
    JSON.stringify(music_indexes),
  );
  fs.writeFileSync(
    join(__dirname, '../indexes/book.json'),
    JSON.stringify(book_indexes),
  );
  fs.writeFileSync(
    join(__dirname, '../indexes/article_to_book.json'),
    JSON.stringify(article_indexes),
  );
})();
