import { inject, injectable } from "inversify";
import { BookImportServiceOutbound } from "../../services/outbounds/books/book-import.service-outbound";
import { BOOK_IMPORT_SERVICE_OUTBOUND } from "../../services/outbounds/books";

@injectable()
export class BookImportUsecase {
  private bookImportService: BookImportServiceOutbound;

  constructor(
    @inject(BOOK_IMPORT_SERVICE_OUTBOUND) bookImportService: BookImportServiceOutbound
  ) {
    this.bookImportService = bookImportService;
  }

  importBooks(path: string): Promise<boolean> {
    return this.bookImportService.importBooks(path);
  }
}
