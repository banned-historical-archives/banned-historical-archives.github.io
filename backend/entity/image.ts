import {
  OneToMany,
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Lyric } from '../entities';
import ImageTag from './imageTag';

@Entity()
export default class Image {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  url!: string;

  @Column({
    type: 'int',
    comment: '表示图片是否需要展示在图库中，而不仅仅作为插图。',
  })
  show_in_gallery!: boolean;

  @Column({ type: 'varchar' })
  description!: string;

  @Column({ type: 'varchar', default: '' })
  source?: string;

  @Column({ type: 'int', default: 0 })
  year?: number;
  @Column({ type: 'int', default: 0 })
  month?: number;
  @Column({ type: 'int', default: 0 })
  day?: number;

  @ManyToMany(() => ImageTag, (tag) => tag.image, {
    cascade: true,
  })
  @JoinTable()
  tags!: ImageTag[];
}
