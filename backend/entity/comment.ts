import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import Publication from './publication';
import Article from './article';

@Entity()
export default class Comment {
  @PrimaryColumn()
  id!: string;

  @Column({nullable: true})
  publicationId!: string;
  @Column({nullable: true})
  articleId!: string;

  @ManyToMany(() => Publication)
  publication!: Publication;
  @ManyToMany(() => Article)
  article!: Article;

  @Column({type: 'int'})
  index!: number;
  @Column({type: 'int'})
  part_index!: number;
  @Column({type: 'int'})
  offset!: number;

  @Column({type: 'text'})
  text!: string;

}
