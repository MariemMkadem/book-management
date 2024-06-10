import { BooksSearchInput } from "../../models/inputs/books/books-search.input";
import { BookOutput } from "../../models/output/books/book.output";
import { PaginationOutput } from "../../models/output/pagination.output";
import { BooksSearchServiceInbound } from "../../services/inbounds/books";
import { BooksSearchServiceOutbound } from "../../services/outbounds/books";

export class BooksSearchUsecase implements BooksSearchServiceInbound {
  private booksSearchService: BooksSearchServiceOutbound;

  constructor(booksSearchService: BooksSearchServiceOutbound) {
    this.booksSearchService = booksSearchService;
  }

  search(
    query: BooksSearchInput,
    start: number,
    size: number
  ): Promise<PaginationOutput<BookOutput>> {
    return this.booksSearchService.search(query, start, size);
  }
}
