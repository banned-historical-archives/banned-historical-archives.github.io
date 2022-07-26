import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import { Article, Author, Publication, Tag } from './index';

@Entity()
export default class Date {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'int' })
  year!: number;
  @Column({ type: 'int', nullable: true })
  month?: number;
  @Column({ type: 'int', nullable: true })
  day?: number;

  @Column({ nullable: true })
  articleId!: string;
  @ManyToOne(() => Article, (article) => article.dates)
  article!: Article;
}
