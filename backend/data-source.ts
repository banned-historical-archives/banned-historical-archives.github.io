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

export const AppDataSource = new DataSource({
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
  port: 3306,
  username: 'root',
  password: 'root_password',
  database: 'banned_history',
});
