import axios from 'axios';
import type Article from '../backend/entity/article';
import type Comment from '../backend/entity/comment';
import type Content from '../backend/entity/content';
import type Page from '../backend/entity/page';

export async function get_article(articleId: string) {
  const res = await axios.get<Article>(`/article/${articleId}.json`, {
    headers: {
      accept: 'application/json',
    },
    data: {},
  });
  return res.data;
}

export async function get_articles() {
  const res = await axios.post<Article[]>('/articles.json', {
    headers: {
      accept: 'application/json',
    },
    data: {},
  });
  return res.data;
}
