import { inject, injectable } from "inversify";
import { BookDeleteServiceOutbound } from "../../services/outbounds/books/book-delete.service-outbound";
import { BOOK_DELETE_SERVICE_OUTBOUND } from "../../services/outbounds/books/book-delete.service-outbound";

@injectable()
export class BookDeleteUseCase {
  constructor(
    @inject(BOOK_DELETE_SERVICE_OUTBOUND) private bookDeleteServiceOutbound: BookDeleteServiceOutbound
  ) {}

  async execute(id: string): Promise<boolean> {
    return this.bookDeleteServiceOutbound.delete(id);
  }
}
