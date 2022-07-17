import { AppDataSource } from "./data-source"

import Article from './entity/article';
import Comment from './entity/comment';
import Content from "./entity/content";
import Page from './entity/page';

export async function init() {
  await AppDataSource.initialize();
}

export async function get_articles(req, res, next) {
  const articles = await AppDataSource.manager.find(Article, {
    relations: {
      authors: true,
      types: true,
      publications: true,
      tags: true,
      dates: true,
    }
  });
  res.json({ articles });
}

export async function get_article(req, res, next) {
  const { id } = req.body as { id: string };
  if (!id) {
    res.json({});
    return;
  }
  const article = await AppDataSource.manager.findOne(Article, {
    where: { id },
    relations: {
      authors: true,
      types: true,
      publications: true,
      tags: true,
      dates: true,
    },
  });
  res.json({ article });
}

export async function get_article_details(req, res, next) {
  const { articleId, publicationId } = req.body as { articleId: string, publicationId: string };
  if (!articleId || !publicationId) {
    res.json({});
    return;
  }
  const comments = await AppDataSource.manager.find(Comment, {
    where: {
      publicationId,
      articleId,
    }
  });
  const contents = await AppDataSource.manager.find(Content, {
    where: {
      publicationId,
      articleId,
    }
  });
  const page = await AppDataSource.manager.findOne(Page, {
    where: {
      publicationId,
      articleId,
    }
  });
  res.json({ comments, contents, page });
}