import {
  Index,
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { TagType } from '../../types';
import { Article, Comment, Page, Content } from '../entities';

@Entity()
@Index(['name'])
@Index(['name', 'type'])
export default class Tag {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'enum', enum: TagType })
  type!: TagType;

  @ManyToMany(() => Article, (article) => article.tags)
  articles!: Article[];
}
