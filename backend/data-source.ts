import "reflect-metadata"
import { DataSource } from 'typeorm';
import Article from './entity/article';
import Author from './entity/author';
import Comment from './entity/comment';
import Publication from './entity/publication';
import Tag from './entity/tag';
import Content from './entity/content';
import Date from './entity/date';
import Type from './entity/type';
import Page from './entity/page';

const instance = new DataSource({
  type: 'mysql',
  synchronize: true,
  logging: false,
  entities: [
    Article,
    Author,
    Comment,
    Publication,
    Tag,
    Content,
    Date,
    Type,
    Page,
  ],
  migrations: [],
  subscribers: [],
  host: process.env.GITLAB_CI ? 'mysql' : 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root_password',
  database: process.env.DB_NAME || 'banned_history',
});

export const init = async () => {
  if (instance.isInitialized) {
    return instance;
  }
  await instance.initialize();
  return instance;
};