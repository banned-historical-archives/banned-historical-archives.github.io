import fs from 'fs-extra';
import { join, parse } from 'path';
import JSON5 from 'json5';
import {
  ArticleIndexes,
  ArticleList,
  MusicMetaData,
  MusicIndexes,
  TagIndexes,
  ResourceMetaData,
  BookMetaData,
  Config,
  GalleryIndexes,
  PictureMetaData,
  VideoMetaData,
  Tag,
} from '../types';

type ArticleMap = {
  [article_id: string]: {
    title: string;
    authors: string[];
    dates: any;
    is_range_date: boolean;
    book_ids: number[];
    tag_ids: number[];
    books: { name: string; id: string; archive_id: number }[];
    tags: { name: string; type: string }[];
  };
};
const gallery_indexes: GalleryIndexes = [];
const music_indexes: MusicIndexes = [];
const article_map: ArticleMap = {};

function article_map_to_list(c: ArticleMap): {
  id: string;
  title: string;
  authors: string[];
  dates: any;
  is_range_date: boolean;
  book_ids: number[];
  tag_ids: number[];
  books: { name: string; id: string; archive_id: number }[];
  tags: { name: string; type: string }[];
}[] {
  return Object.keys(c).map((i) => {
    const a = c[i];
    return {
      id: i,
      ...a,
    };
  });
}
(async () => {
  for (let i = 0; i <= 31; ++i) {
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
                  tags: tags,
                  books: [],
                };
              article_map[article_id].books?.push({
                name: bookMetaData.name,
                archive_id: i,
                id: bookMetaData.id,
              });
            }
          }
        }
      }
    }
  }

  const article_list = article_map_to_list(article_map);
  const chunk_size = 10000;
  let n_chunk = Math.floor(article_list.length / chunk_size) + 1;
  if (article_list.length % chunk_size == 0) {
    n_chunk--;
  }
  fs.ensureDirSync(join(__dirname, '../indexes'));
  fs.writeFileSync(
    join(__dirname, '../indexes/file_count.json'),
    JSON.stringify({
      article_list: n_chunk,
    }),
  );
  for (let i = 0; i < n_chunk; i++) {
    const a_list = article_list.slice(i * chunk_size, (i + 1) * chunk_size);
    const b_map = new Map<string, number>();
    const books: string[] = [];
    const t_map = new Map<string, number>();
    const tags: { type: string; name: string }[] = [];
    fs.writeFileSync(
      join(__dirname, `../indexes/article_list_with_book_info_${i}.json`),
      JSON.stringify(
        a_list.map((x) => [
          x.id,
          x.books.map((j) => [j.id, j.name, j.archive_id]),
        ]),
      ),
    );
    a_list.forEach((i) => {
      i.books.forEach((j) => {
        if (!b_map.has(j.id)) {
          books.push(j.name);
          b_map.set(j.id, books.length - 1);
          i.book_ids.push(books.length - 1);
        } else {
          i.book_ids.push(b_map.get(j.id)!);
        }
      });
      i.tags.forEach((j) => {
        const id = `${j.type}--${j.name}`;
        if (!t_map.has(id)) {
          tags.push(j);
          t_map.set(id, tags.length - 1);
          i.tag_ids.push(tags.length - 1);
        } else {
          i.tag_ids.push(t_map.get(id)!);
        }
      });
      delete (i as any).books;
      delete (i as any).tags;
    });
    fs.writeFileSync(
      join(__dirname, `../indexes/article_list_${i}.json`),
      JSON.stringify({
        articles: a_list,
        books,
        tags,
      }),
    );
  }

  fs.writeFileSync(
    join(__dirname, '../indexes/gallery.json'),
    JSON.stringify(gallery_indexes),
  );
  fs.writeFileSync(
    join(__dirname, '../indexes/music.json'),
    JSON.stringify(music_indexes),
  );
})();
