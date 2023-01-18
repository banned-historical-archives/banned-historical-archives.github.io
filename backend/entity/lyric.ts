import {
  OneToMany,
  ManyToOne,
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Music, Audio } from '../entities';

@Entity()
export default class Lyric {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'varchar' })
  lyricist!: string;

  @Column({ type: 'varchar' })
  version!: string;

  @Column({ type: 'text' })
  content!: string;

  @OneToMany(() => Audio, (audio) => audio.lyric)
  audios!: Audio[];

  @Column({ nullable: true })
  musicId!: string;
  @ManyToOne(() => Music, (music) => music.lyrics)
  music!: Music;
}
