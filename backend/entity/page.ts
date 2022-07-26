import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { Article, Author, Publication, Tag } from './index';

@Entity()
export default class Page {
  @PrimaryColumn()
  id!: string;

  @Column({nullable: true})
  publicationId!: string;
  @Column({nullable: true})
  articleId!: string;

  @ManyToOne(() => Publication, publication => publication.pages)
  publication!: Publication;
  @ManyToOne(() => Article)
  article!: Article;

  @Column({type: 'int'})
  start!: number;
  @Column({type: 'int'})
  end!: number;

}
