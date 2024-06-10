import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Book } from './book';

@Entity()
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column('text')
  content: string;

  @ManyToMany(() => Book, (book) => book.pages)
  books: Book[];

}