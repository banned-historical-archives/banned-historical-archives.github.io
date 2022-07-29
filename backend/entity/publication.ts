import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import {
  Article,
  Comment,
  Tag,
  Page,
  Type,
  Content,
} from '../entities';

@Entity()
export default class Publication {
  @PrimaryColumn({type: 'varchar'})
  id!: string;

  @Column({type: 'varchar'})
  name!: string;

  @Column({type: 'bool', comment: `内部文件`})
  internal!: boolean;

  @Column({type: 'bool', comment: `官方出版`})
  official!: boolean;

  @Column({type: 'varchar'})
  author!: string;
  @Column({type: 'varchar', comment: '下载地址'})
  pdf!: string;

  @OneToMany(() => Article, article => article.publications)
  articles!: Article[];

  @OneToMany(() => Comment, comment => comment.publication)
  comments!: Comment[];
  @OneToMany(() => Content, content => content.publication)
  contents!: Content[];

  @OneToMany(() => Page, page => page.publication)
  pages!: Page[];
}
