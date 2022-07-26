import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { ArticleType } from '../../types';
import { Article, Author, Comment, Page, Content } from './index';

@Entity()
export default class Type {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Column({ type: 'enum', enum: ArticleType })
  type!: ArticleType;

  @ManyToMany(() => Article, (article) => article.tags)
  articles!: Article[];
}
