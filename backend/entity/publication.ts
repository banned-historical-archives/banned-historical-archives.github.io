import {
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Article, Comment, Tag, Page, Content } from '../entities';

@Entity()
export default class Publication {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'bool', comment: `内部文件` })
  internal!: boolean;

  @Column({ type: 'bool', comment: `官方出版` })
  official!: boolean;

  @Column({ type: 'varchar', comment: `pdf, img, db` })
  type!: string;

  @Column({ type: 'varchar' })
  author!: string;
  @Column({ type: 'text', comment: '下载地址，如果有多个地址用,分隔' })
  files!: string;

  @OneToMany(() => Article, (article) => article.publications)
  articles!: Article[];

  @OneToMany(() => Comment, (comment) => comment.publication)
  comments!: Comment[];
  @OneToMany(() => Content, (content) => content.publication)
  contents!: Content[];

  @OneToMany(() => Page, (page) => page.publication)
  pages!: Page[];
}
