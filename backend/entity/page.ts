import {
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
  Index,
} from 'typeorm';
import { Article, Comment, Publication, Tag } from '../entities';

@Entity()
@Index(["articleId", "publicationId"])
export default class Page {
  @PrimaryColumn()
  id!: string;

  @Column({ nullable: true })
  publicationId!: string;
  @Column({ nullable: true })
  articleId!: string;

  @ManyToOne(() => Publication, (publication) => publication.pages)
  publication!: Publication;
  @ManyToOne(() => Article)
  article!: Article;

  @Column({
    type: 'int',
    comment: '文稿所在页码，相对于 pdf 而不是实体书籍中的页码',
  })
  start!: number;
  @Column({ type: 'int' })
  end!: number;
}
