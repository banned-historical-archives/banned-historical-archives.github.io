import 'reflect-metadata';
import { init } from './data-source';
import Article from './entity/article';
import Content from './entity/content';
import Comment from './entity/comment';

import esClient from './connect-es';

type ESArticle = {
  article_id: string;
  publication_id: string;
  publication_name: string;
  title: string;
  aliases: string[];
  authors: string[];
  content: string;
  comments: string[];
};

init()
  .then(async (AppDataSource) => {
    // 清空
    try {
      await esClient.deleteByQuery({
        index: 'article',
        body: {
          query: {
            match_all: {},
          },
        },
      });
    } catch (e) {}

    const articles = await AppDataSource.manager.find(Article, {
      relations: {
        authors: true,
        aliases: true,
        publications: true,
        tags: true,
        dates: true,
      },
    });
    const es_articles: ESArticle[] = [];
    let t = 0;
    for (const article of articles) {
      for (const publication of article.publications) {
        const contents = await AppDataSource.manager.find(Content, {
          where: {
            publicationId: publication.id,
            articleId: article.id,
          },
        });
        const comments = await AppDataSource.manager.find(Comment, {
          where: {
            publicationId: publication.id,
            articleId: article.id,
          },
        });
        const es_article: ESArticle = {
          article_id: article.id,
          publication_id: publication.id,
          publication_name: publication.name,
          authors: article.authors.map((i) => i.name),
          title: article.title,
          aliases: article.aliases.map((i) => i.name),
          content: contents.map((j) => j.text).join('\n'),
          comments: comments.map((i) => i.text),
        };
        es_articles.push(es_article);
        await esClient.index({
          index: 'article',
          id: `${article.id}-${publication.id}`,
          document: es_article,
        });
      }
      console.log(`${++t}/${articles.length}`);
    }
  })
  .catch((error) => console.error(error));
