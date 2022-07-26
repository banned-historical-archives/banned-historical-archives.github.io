import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Article } from './index';

@Entity()
export default class Author {
  @PrimaryColumn({ type: 'varchar'})
  id!: string;

  @Column({type: 'varchar'})
  name!: string;

  @ManyToMany(() => Article, article => article.authors)
  articles!: Article[];
}
