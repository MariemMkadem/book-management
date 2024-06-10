import { BooksSearchInput } from "../../../models/inputs/books/books-search.input";
import { BookOutput } from "../../../models/output/books/book.output";
import { PaginationOutput } from "../../../models/output/pagination.output";

export const BOOKS_SEARCH_SERVICE_OUTBOUND = "BOOKS_SEARCH_SERVICE_OUTBOUND";

export interface BooksSearchServiceOutbound {
  search(
    query: BooksSearchInput,
    start: number,
    size: number
  ): Promise<PaginationOutput<BookOutput>>;
}
