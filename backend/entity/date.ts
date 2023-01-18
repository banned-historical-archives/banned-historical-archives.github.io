import {
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Article, Comment, Publication, Tag, Page } from '../entities';

@Entity()
export default class Date {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'int' })
  index!: number;
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
