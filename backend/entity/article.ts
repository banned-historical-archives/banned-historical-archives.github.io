import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';

import {
  Author,
  Comment,
  Publication,
  Tag,
  Content,
  Date,
  Type,
  Page,
} from '../entities';

@Entity()
export default class Article {
  @PrimaryColumn({ type: 'varchar' })
  id!: string;

  @Column({ type: 'varchar' })
  title!: string;

  @Column({ type: 'varchar' ,comment:`
初始来源
例如：1919 年 12 月 28 日《湖南教育月刊》
  `})
  origin!: string;

  @Column({ type: 'bool',comment: `
文稿日期
可能包含多个日期/时间点（发刊日期、审稿日期、起草日期、定稿日期、子文稿的日期等）
当 is_range_date 为 true 时表示时间段，dates数组中将包含两个日期：起始和截止日期
  ` })
  is_range_date!: boolean;
  @OneToMany(() => Date, (date) => date.article, {
    cascade: true
  })
  dates!: Date[];

  @ManyToMany(() => Tag, (tag) => tag.articles, {
    cascade: true
  })
  @JoinTable()
  tags!: Tag[];

  @ManyToMany(() => Publication, (publication) => publication.articles, {
    cascade: true,
  })
  @JoinTable()
  publications!: Publication[];

  @ManyToMany(() => Author, (author) => author.articles, {
    cascade: true
  })
  @JoinTable()
  authors!: Author[];

  @ManyToMany(() => Type, (t) => t.articles, {
    cascade: true
  })
  @JoinTable()
  types!: Type[];
}
