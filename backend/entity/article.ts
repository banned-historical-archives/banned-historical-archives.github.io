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

  @Column({ type: 'varchar' })
  origin!: string;

  @Column({ type: 'bool' })
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
