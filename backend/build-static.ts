import { existsSync, mkdirSync } from 'fs';
import { writeFile, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { AppDataSource } from "./data-source"
import Article from './entity/article';
import Comment from './entity/comment';
import Content from "./entity/content";
import Page from './entity/page';

async function init() {
  await AppDataSource.initialize();
}

init().then(async () => {
  const articles = await AppDataSource.manager.find(Article, {
    relations: {
      authors: true,
      types: true,
      publications: true,
      tags: true,
      dates: true,
    },
  });

  const out_dir = process.env.PRODUCTION_MODE ? 'dist' : 'public';
  const dir = join(__dirname, `../${out_dir}`);
  const details_dir = join(__dirname, `../${out_dir}/article`);
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  if (!existsSync(details_dir)) {
    mkdirSync(details_dir);
  }
  writeFileSync(join(dir, `articles.json`), JSON.stringify(articles));
  const promises: Promise<any>[] = [];
  let idx = 0;
  for (const article of articles) {
    const articleId = article.id;
    for (const publication of article.publications) {
      const publicationId = publication.id;
      publication.comments = await AppDataSource.manager.find(Comment, {
        where: {
          publicationId,
          articleId,
        },
      });
      publication.contents = await AppDataSource.manager.find(Content, {
        where: {
          publicationId,
          articleId,
        },
      });
      publication.pages = [
        await AppDataSource.manager.findOne(Page, {
          where: {
            publicationId,
            articleId,
          },
        }),
      ];
    }
    promises.push(
      new Promise((resolve) =>
        writeFile(
          join(details_dir, `./${articleId}.json`),
          JSON.stringify(article),
          resolve,
        ),
      ),
    );
    console.log(`${idx++}/${articles.length}`);
  }
  await Promise.all(promises);
  console.log('done');
  process.exit();
});