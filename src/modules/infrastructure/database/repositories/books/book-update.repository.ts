import { injectable } from "inversify";
import { BookUpdateServiceOutbound } from "../../../../core/services/outbounds/books/book-update.service-outbound";
import { AppDataSource } from "../../../../../config/data-source.config";
import { Book } from "../../../database/entities/book";
import { BookUpdateInput } from "../../../../core/models/inputs/books/book-update.input";

@injectable()
export class BookUpdateRepository implements BookUpdateServiceOutbound {
  async update(input: BookUpdateInput): Promise<boolean> {
    const bookRepository = AppDataSource.getRepository(Book);
    const book = await bookRepository.findOneBy({ id: input.id });
    if (!book) {
      throw new Error(`Book with id ${input.id} not found`);
    }

    // Merge new values into the existing book
    bookRepository.merge(book, input);
    await bookRepository.save(book);
    return true;
  }
}