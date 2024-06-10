export class BooksSearchInput {
  search?: string; // search by title or by author
  publicationAt?: Date;
  pageCount?: number; // filter by total pages > 30 get only book with > 30 page
}
