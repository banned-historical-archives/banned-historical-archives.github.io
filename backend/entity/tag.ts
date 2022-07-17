import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import Article from './article';

@Entity()
export default class Tag {
  @PrimaryColumn()
  id!: string;

  @Column({type: 'varchar'})
  name!: string;

  @ManyToMany(() => Article, article => article.tags)
  articles!: Article[];
}
