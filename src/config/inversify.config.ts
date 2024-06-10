import { Container } from "inversify";
import {
  BOOKS_SEARCH_SERVICE_INBOUND,
  BOOK_CREATE_SERVICE_INBOUND,
  BOOK_UPDATE_SERVICE_INBOUND,
  BOOK_IMPORT_SERVICE_INBOUND,
  BookCreateServiceInbound,
  BookUpdateServiceInbound,
  BooksSearchServiceInbound,
  BookImportServiceInbound,
} from "../modules/core/services/inbounds/books";
import {
  BookCreateRepository,
  BookUpdateRepository,
  BooksSearchRepository,
  BookImportRepository,
} from "../modules/infrastructure/database/repositories/books";
import {
  BOOKS_SEARCH_SERVICE_OUTBOUND,
  BOOK_CREATE_SERVICE_OUTBOUND,
  BOOK_UPDATE_SERVICE_OUTBOUND,
  BOOK_IMPORT_SERVICE_OUTBOUND,
  BookCreateServiceOutbound,
  BookUpdateServiceOutbound,
  BooksSearchServiceOutbound,
  BookImportServiceOutbound,
} from "../modules/core/services/outbounds/books";
import {
  BookCreateUsecase,
  BookUpdateUsecase,
  BooksSearchUsecase,
  BookImportUsecase,
} from "../modules/core/usecases/books";

const container = new Container();

container
  .bind<BookCreateServiceOutbound>(BOOK_CREATE_SERVICE_OUTBOUND)
  .to(BookCreateRepository);

container
  .bind<BookCreateServiceInbound>(BOOK_CREATE_SERVICE_INBOUND)
  .toDynamicValue((context) => {
    const bookCreateService = context.container.get<BookCreateServiceOutbound>(
      BOOK_CREATE_SERVICE_OUTBOUND
    );
    return new BookCreateUsecase(bookCreateService);
  });

container
  .bind<BookUpdateServiceOutbound>(BOOK_UPDATE_SERVICE_OUTBOUND)
  .to(BookUpdateRepository);

container
  .bind<BookUpdateServiceInbound>(BOOK_UPDATE_SERVICE_INBOUND)
  .toDynamicValue((context) => {
    const bookUpdateService = context.container.get<BookUpdateServiceOutbound>(
      BOOK_UPDATE_SERVICE_OUTBOUND
    );
    return new BookUpdateUsecase(bookUpdateService);
  });

container
  .bind<BooksSearchServiceOutbound>(BOOKS_SEARCH_SERVICE_OUTBOUND)
  .to(BooksSearchRepository);


container
.bind<BookImportServiceOutbound>(BOOK_IMPORT_SERVICE_OUTBOUND)
.to(BookImportRepository);


  container
  .bind<BookImportServiceInbound>(BOOK_IMPORT_SERVICE_INBOUND)
  .toDynamicValue((context) => {
    const bookImportService = context.container.get<BookImportServiceOutbound>(
      BOOK_IMPORT_SERVICE_OUTBOUND
    );
    return new BookImportUsecase(bookImportService) as BookImportServiceInbound;
  });

container
  .bind<BooksSearchServiceInbound>(BOOKS_SEARCH_SERVICE_INBOUND)
  .toDynamicValue((context) => {
    const booksSearchService =
      context.container.get<BooksSearchServiceOutbound>(
        BOOKS_SEARCH_SERVICE_OUTBOUND
      );
    return new BooksSearchUsecase(booksSearchService);
  });

export { container };
