import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { ArticleType, ContentType } from '../../types';
import { Article, Author, Publication, Tag } from './index';

@Entity()
export default class Content {
  @PrimaryColumn()
  id!: string;

  @Column({type: 'enum', enum: ContentType})
  type!: ContentType;

  @Column({type: 'text'})
  text!: string;

  @Column({type: 'int'})
  index!: number;

  @Column({nullable: true})
  publicationId!: string;
  @Column({nullable: true})
  articleId!: string;
  @ManyToMany(() => Publication)
  publication!: Publication;
  @ManyToMany(() => Article)
  article!: Article;
}
