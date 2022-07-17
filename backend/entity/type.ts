import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import Tag from './tag';
import Publication from './publication';
import Article from './article';
import { ArticleType } from '../../types';

@Entity()
export default class Type {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Column({ type: 'enum', enum: ArticleType })
  type!: ArticleType;

  @ManyToMany(() => Article, (article) => article.tags)
  articles!: Article[];
}
