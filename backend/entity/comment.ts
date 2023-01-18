import {
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Article, Publication, Tag, Content, Date, Page } from '../entities';

@Entity()
export default class Comment {
  @PrimaryColumn()
  id!: string;

  @Column({ nullable: true })
  publicationId!: string;
  @Column({ nullable: true })
  articleId!: string;

  @ManyToMany(() => Publication)
  publication!: Publication;
  @ManyToMany(() => Article)
  article!: Article;

  @Column({ type: 'int', comment: `编号` })
  index!: number;
  @Column({
    type: 'int',
    comment: `
角注在文稿 contents 中的位置
当 part_index 为 -1 且 offset 为 -1 时表示对整个文稿的注释（描述）
  `,
  })
  part_index!: number;
  @Column({
    type: 'int',
    comment: `
角注在当前段落的偏移量
当 part_index 为 -1 且 offset 为 -1 时表示对整个文稿的注释（描述）
  `,
  })
  offset!: number;

  @Column({ type: 'text' })
  text!: string;
}
