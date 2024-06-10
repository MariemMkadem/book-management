import { inject, injectable } from "inversify";
import { BookCreateInput } from "../../models/inputs/books/book-create.input";
import { BookCreateServiceOutbound } from "../../services/outbounds/books";
import { BOOK_CREATE_SERVICE_OUTBOUND } from "../../services/outbounds/books";

@injectable()
export class BookCreateUsecase {
  constructor(
    @inject(BOOK_CREATE_SERVICE_OUTBOUND) private bookCreateService: BookCreateServiceOutbound
  ) {}

  create(input: BookCreateInput): Promise<boolean> {
    return this.bookCreateService.create(input);
  }
}
