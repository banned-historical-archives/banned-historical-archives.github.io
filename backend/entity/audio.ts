import { OneToMany, ManyToOne, Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import {
  Music,
  Lyric,
} from '../entities';

@Entity()
export default class Audio {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'varchar' })
  url!: string;

  @Column({ type: 'varchar' })
  artist!: string;

  @Column({ type: 'varchar' })
  source!: string;

  @Column({ nullable: true })
  lyricId!: string;
  @ManyToOne(() => Lyric, (lyric) => lyric.audios)
  lyric!: Lyric;
}
