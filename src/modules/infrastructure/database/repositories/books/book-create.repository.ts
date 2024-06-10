import { injectable } from "inversify";
import { BookCreateServiceOutbound } from "../../../../core/services/outbounds/books/book-create.service-outbound";
import { AppDataSource } from "../../../../../config/data-source.config";
import { Book } from "../../../database/entities";
import { BookCreateInput } from "../../../../core/models/inputs/books/book-create.input";

@injectable()
export class BookCreateRepository implements BookCreateServiceOutbound {
  async create(input: BookCreateInput): Promise<boolean> {
    const bookRepository = AppDataSource.getRepository(Book);
    const book = bookRepository.create(input);
    await bookRepository.save(book);
    return true;
  }
}