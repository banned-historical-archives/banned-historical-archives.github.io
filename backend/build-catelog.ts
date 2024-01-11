import fs from 'fs-extra';
import { join, parse } from 'path';
import { ArticleIndexes, BookCatelog, BookCatelogTemp, BookIndexes, TagIndexes } from '../types';

const catelog_temp: BookCatelogTemp = {};
const article_indexes: ArticleIndexes = {};
const tag_cache: {[type: string]: {[name: string]: number}} = {};
const article_tag_cache = {};
const tag_indexes: TagIndexes = [];
const book_indexes_cache: {[id: string]: {name: string, archive_id: number, number_id: number}} = {};
const book_indexes: BookIndexes = [];

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
  for (let i = 0; i <= 20; ++i) {
    const p = join(__dirname, '../parsed/archives' + i);
    console.log(p);
    if (!(await fs.pathExists(p))) continue;
    for (const prefix of (await fs.readdir(p)).filter(
      (i) => !i.startsWith('.') && !i.endsWith('.md'),
    )) {
      for (const resource of await fs.readdir(join(p, prefix))) {
        console.log('resource', resource);
        const flist = await fs.readdir(join(p, prefix, resource));

        const book_info_path = join(
          p,
          prefix,
          resource,
          resource + '.bookinfo',
        );
        const music_info_path = join(
          p,
          prefix,
          resource,
          resource + '.musicinfo',
        );
        const picture_info_path = join(
          p,
          prefix,
          resource,
          resource + '.pictureinfo',
        );
        const video_info_path = join(
          p,
          prefix,
          resource,
          resource + '.videoinfo',
        );

        if (await fs.pathExists(music_info_path)) {
          // TODO
        } else if (await fs.pathExists(picture_info_path)) {
          // TODO
        } else if (await fs.pathExists(video_info_path)) {
          // TODO
        } else if (await fs.pathExists(book_info_path)) {
          const prefix2_list = flist.filter((x) => !x.endsWith('.bookinfo'));

          const bookinfo = JSON.parse(
            (await fs.readFile(book_info_path)).toString(),
          );
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
              if (!catelog_temp[article_id])
                catelog_temp[article_id] = {
                  title: article.title,
                  dates: article.dates,
                  authors: article.authors,
                  is_range_date: article.is_range_date,
                  tag_ids: [],
                  book_ids: [],
                };
              tags.forEach((tag) => {
                if (!tag_cache[tag.type])
                  tag_cache[tag.type] = {};
                if (tag_cache[tag.type][tag.name] == undefined) {
                  tag_indexes.push([tag.type, tag.name]);
                  tag_cache[tag.type][tag.name] = n_tag;
                  catelog_temp[article_id].tag_ids.push(n_tag);
                  n_tag++;
                } else {
                  catelog_temp[article_id].tag_ids.push(
                    tag_cache[tag.type][tag.name]
                  );
                }
              });
              if (!article_indexes[article_id]) {
                article_indexes[article_id] = [];
              }
              if (!book_indexes_cache[bookinfo.id]) {
                book_indexes_cache[bookinfo.id] = {
                  name: bookinfo.name,
                  archive_id: i,
                  number_id: n_book,
                };
                book_indexes.push([bookinfo.id, bookinfo.name, i]);
                catelog_temp[article_id].book_ids.push(n_book);
                article_indexes[article_id].push(n_book);
                ++n_book;
              } else {
                catelog_temp[article_id].book_ids.push(book_indexes_cache[bookinfo.id].number_id);
                article_indexes[article_id].push(book_indexes_cache[bookinfo.id].number_id);
              }
            }
          }
        }
      }
    }
  }
  fs.writeFileSync(
    join(__dirname, '../book_catelog.json'),
    JSON.stringify(catelog_temp_to_catelog(catelog_temp)),
  );
  fs.writeFileSync(
    join(__dirname, '../tag_indexes.json'),
    JSON.stringify(tag_indexes),
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
