import {
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  Index,
} from 'typeorm';
import { ArticleType, ContentType } from '../../types';
import { Article, Comment, Publication, Tag, Date, Page } from '../entities';

@Entity()
@Index(["articleId", "publicationId"])
export default class Content {
  @PrimaryColumn()
  id!: string;

  @Index()
  @Column({ type: 'enum', enum: ContentType })
  type!: ContentType;

  @Column({ type: 'longtext' })
  text!: string;

  @Column({ type: 'int' })
  index!: number;

  @Column({ nullable: true })
  publicationId!: string;
  @Column({ nullable: true })
  articleId!: string;
  @ManyToMany(() => Publication)
  publication!: Publication;
  @ManyToMany(() => Article)
  article!: Article;
}
