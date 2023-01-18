import {
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  Index,
} from 'typeorm';
import {
  Article,
  Comment,
  Publication,
  Tag,
  Content,
  Date,
  Page,
} from '../entities';

@Entity()
export default class Author {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Index()
  @Column({ type: 'varchar' })
  name!: string;

  @ManyToMany(() => Article, (article) => article.authors)
  articles!: Article[];
}
