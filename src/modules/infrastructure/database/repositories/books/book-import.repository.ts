import { injectable } from "inversify";
import { BookImportServiceOutbound } from "../../../../core/services/outbounds/books/book-import.service-outbound";
import { AppDataSource } from "../../../../../config/data-source.config";
import { Book, Page } from "../../../database/entities";
import * as fs from 'fs';
import * as path from 'path';

@injectable()
export class BookImportRepository implements BookImportServiceOutbound {
  async importBooks(directoryPath: string): Promise<boolean> {
    const bookRepository = AppDataSource.getRepository(Book);
    const pageRepository = AppDataSource.getRepository(Page);

    const bookDirs = fs.readdirSync(directoryPath);

    for (const dir of bookDirs) {
      const bookPath = path.join(directoryPath, dir);
      if (fs.lstatSync(bookPath).isDirectory()) {
        const bookInfo = fs.readFileSync(path.join(bookPath, 'info.txt'), 'utf8').split('\n');
        const title = bookInfo[0];
        const author = bookInfo[1];
        const publicationDate = new Date(bookInfo[2]);

        const book = bookRepository.create({
          title,
          author,
          publicationDate,
          pages: []
        });

        const pages = fs.readdirSync(bookPath).filter(file => file.endsWith('.txt') && file !== 'info.txt');
        for (const pageFile of pages) {
          const pageNumber = parseInt(pageFile.replace('.txt', ''));
          const content = fs.readFileSync(path.join(bookPath, pageFile), 'utf8');
          const page = pageRepository.create({
            number: pageNumber,
            content,
          });
          book.pages.push(page);
        }

        await bookRepository.save(book);
      }
    }
    return true;
  }
}
