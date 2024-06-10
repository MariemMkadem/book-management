import { inject, injectable } from "inversify";
import { BookUpdateInput } from "../../models/inputs/books/book-update.input";
import { BookUpdateServiceOutbound } from "../../services/outbounds/books";
import { BOOK_UPDATE_SERVICE_OUTBOUND } from "../../services/outbounds/books";

@injectable()
export class BookUpdateUsecase {
  private bookUpdateService: BookUpdateServiceOutbound;

  constructor(
    @inject(BOOK_UPDATE_SERVICE_OUTBOUND) bookUpdateService: BookUpdateServiceOutbound
  ) {
    this.bookUpdateService = bookUpdateService;
  }

  update(input: BookUpdateInput): Promise<boolean> {
    return this.bookUpdateService.update(input);
  }
}
