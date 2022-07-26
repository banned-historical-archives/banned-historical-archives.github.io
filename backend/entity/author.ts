import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import {
  Article,
  Comment,
  Publication,
  Tag,
  Content,
  Date,
  Type,
  Page,
} from '../entities';

@Entity()
export default class Author {
  @PrimaryColumn({ type: 'varchar'})
  id!: string;

  @Column({type: 'varchar'})
  name!: string;

  @ManyToMany(() => Article, article => article.authors)
  articles!: Article[];
}
