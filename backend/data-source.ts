import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
  Article,
  Audio,
  Lyric,
  Music,
  Alias,
  Author,
  Comment,
  Publication,
  Image,
  ImageTag,
  Tag,
  Content,
  Date,
  Page,
} from './entities';
import * as dotenv from 'dotenv';
dotenv.config();

const instance = new DataSource({
  type: 'mysql',
  synchronize: true,
  logging: false,
  entities: [
    Article,
    Author,
    Alias,
    Comment,
    Publication,
    Tag,
    Content,
    Date,
    Lyric,
    Music,
    Image,
    ImageTag,
    Page,
    Audio,
  ],
  migrations: [],
  subscribers: [],
  host: '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root_password',
  database: process.env.DB_NAME || 'bha',
});

export const init = async () => {
  if (instance.isInitialized) {
    return instance;
  }
  await instance.initialize();
  return instance;
};
