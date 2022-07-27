import {
  OneToMany,
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Lyric } from '../entities';

@Entity()
export default class Music {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  composer!: string;

  @Column({ type: 'varchar' })
  description!: string;

  @OneToMany(() => Lyric, (lyric) => lyric.music)
  lyrics!: Lyric[];
}
