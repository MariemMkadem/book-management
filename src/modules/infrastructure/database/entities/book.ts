import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Page } from './page';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ type: 'date' })
  publicationDate: Date;

  @Column({ nullable: true })
  summary?: string;

  @ManyToMany(() => Page, (page) => page.books, { cascade: true })
  @JoinTable()
  pages: Page[];
}