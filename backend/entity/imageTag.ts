import {
  Index,
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { ImageTagType, TagType } from '../../types';
import { Article, Comment, Page, Content, Image } from '../entities';

@Entity()
@Index(['name'])
@Index(['name', 'type'])
export default class ImageTag {
  @PrimaryColumn()
  id?: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'enum', enum: ImageTagType })
  type!: keyof typeof ImageTagType;

  @ManyToMany(() => Image, (image) => image.tags)
  image?: Image[];
}
