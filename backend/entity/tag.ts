import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import {
  Article,
  Comment,
  Page,
  Type,
  Content,
} from '../entities';

@Entity()
export default class Tag {
  @PrimaryColumn()
  id!: string;

  @Column({type: 'varchar'})
  name!: string;

  @ManyToMany(() => Article, article => article.tags)
  articles!: Article[];
}
