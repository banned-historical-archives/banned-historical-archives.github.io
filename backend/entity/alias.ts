import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import {
  Article,
  Comment,
  Publication,
  Tag,
  Page,
} from '../entities';

@Entity()
export default class Alias {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  articleId!: string;
  @ManyToOne(() => Article, (article) => article.aliases)
  article!: Article;
}
