import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { ArticleType } from '../../types';
import {
  Article,
  Publication,
  Comment,
  Page,
  Content,
} from '../entities';

@Entity()
export default class Type {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Column({ type: 'enum', enum: ArticleType })
  type!: ArticleType;

  @ManyToMany(() => Article, (article) => article.tags)
  articles!: Article[];
}
