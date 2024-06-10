import { injectable } from "inversify";
import { BooksSearchServiceOutbound } from "../../../../core/services/outbounds/books";
import { BooksSearchInput } from "../../../../core/models/inputs/books/books-search.input";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../config/data-source.config";
import { User } from "../../entities";
import { PaginationOutput } from "../../../../core/models/output/pagination.output";
import { BookOutput } from "../../../../core/models/output/books/book.output";
@injectable()
export class BooksSearchRepository implements BooksSearchServiceOutbound {
  private bookRepository: Repository<User>;

  constructor() {
    this.bookRepository = AppDataSource.getRepository(User);
  }

  async search(
    query: BooksSearchInput,
    start: number,
    size: number
  ): Promise<PaginationOutput<BookOutput>> {
    const queryBuilder = this.bookRepository
      .createQueryBuilder("book")
      .select("book.id")
      .addSelect("book.firstName");

    queryBuilder.addSelect("COUNT(*) OVER ()", "total_results");

    if (query.search) {
      queryBuilder.andWhere(
        "book.title LIKE :search OR book.author LIKE :search",
        {
          search: `%${query.search}%`,
        }
      );
    }

    if (start !== undefined && size)
      queryBuilder.offset(start).limit(start + size);

    const [resultSearchBook, total] = await queryBuilder
      .getRawMany()
      .then((rows) => {
        return [
          rows?.map(
            (row) =>
              new BookOutput({
                id: Number(row?.id),
                title: row?.title,
              })
          ) || [],
          rows[0]?.total_results || 0,
        ];
      });

    return { total: Number(total), data: resultSearchBook };
  }
}
