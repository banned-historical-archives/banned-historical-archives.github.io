import fs from 'fs-extra';
import { join, parse } from 'path';
import { ArticleIndexes, BookCatelog, BookCatelogTemp } from '../types';

const book_catelog: BookCatelogTemp = {};
const article_indexes: ArticleIndexes = {};

function catelog_temp_to_catelog(c: BookCatelogTemp): BookCatelog {
  return Object.keys(c).map((i) => {
    const a = c[i];
    const tags: { type: string; name: string }[] = [];
    Object.keys(a.tags).forEach((type) => {
      Object.keys(a.tags[type]).forEach((name) => {
        tags.push({ type, name });
      });
    });
    return {
      id: i,
      ...a,
      tags,
      books: Object.values(a.books),
    };
  });
}
(async () => {
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
              if (!book_catelog[article_id])
                book_catelog[article_id] = {
                  title: article.title,
                  dates: article.dates,
                  authors: article.authors,
                  is_range_date: article.is_range_date,
                  tags: {},
                  books: {},
                };
              tags.forEach((tag) => {
                if (!book_catelog[article_id].tags[tag.type])
                  book_catelog[article_id].tags[tag.type] = {};
                book_catelog[article_id].tags[tag.type][tag.name] = true;
              });
              book_catelog[article_id].books[bookinfo.id] = bookinfo.name;

              if (!article_indexes[article_id]) {
                article_indexes[article_id] = {};
              }
              article_indexes[article_id][bookinfo.id] = i.toString();
            }
          }
        }
      }
    }
  }
  fs.writeFileSync(
    join(__dirname, '../book_catelog.json'),
    JSON.stringify(catelog_temp_to_catelog(book_catelog)),
  );
  fs.writeFileSync(
    join(__dirname, '../article_indexes.json'),
    JSON.stringify(article_indexes),
  );
})();
