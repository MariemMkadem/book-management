export class BookCreateInput {
  title: string;
  author: string;
  publicationAt: Date;
  pages: {
    number: number;
    content: string;
  }[];
}
