import * as express from "express";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  queryParam,
  response,
  httpPut,
  requestParam,
} from "inversify-express-utils";
import { inject } from "inversify";
import {
  BOOKS_SEARCH_SERVICE_INBOUND,
  BOOK_CREATE_SERVICE_INBOUND,
  BOOK_UPDATE_SERVICE_INBOUND,
  BOOK_IMPORT_SERVICE_INBOUND,
  BookCreateServiceInbound,
  BookUpdateServiceInbound,
  BooksSearchServiceInbound,
  BookImportServiceInbound,

} from "../../core/services/inbounds/books";
import { PaginationHelper } from "../../../helpers/pagination.helper";
import { BookCreateInput } from "../../core/models/inputs/books/book-create.input";
import { BookUpdateInput } from "../../core/models/inputs/books/book-update.input";


@controller("/books")
export class BookController implements interfaces.Controller {
  constructor(
    @inject(BOOK_CREATE_SERVICE_INBOUND)
    private bookCreateService: BookCreateServiceInbound,
    @inject(BOOK_UPDATE_SERVICE_INBOUND)
    private bookUpdateService: BookUpdateServiceInbound,
    @inject(BOOKS_SEARCH_SERVICE_INBOUND)
    private booksSearchService: BooksSearchServiceInbound,
    @inject(BOOK_IMPORT_SERVICE_INBOUND) 
    private bookImportService: BookImportServiceInbound

  ) {}

  @httpGet("/")
  private async search(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    const { end, size, start } = PaginationHelper(req.headers["range"]);

    const result = await this.booksSearchService.search(req.query, start, size);

    res.setHeader("Content-Range", `books ${start}-${end}/${result.total}`);

    return res.status(200).send(result);
  }

  // @httpGet("/")
  // private list(
  //   @queryParam("start") start: number,
  //   @queryParam("count") count: number
  // ): string {
  //   return this.fooService.get(start, count);
  // }

  @httpPost("/")
  public async createBook(
    @request() req: express.Request,
    @response() res: express.Response
  ): Promise<express.Response> {
    const input: BookCreateInput = req.body;
    try {
      const result = await this.bookCreateService.create(input);
      return res.status(201).json({ success: result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  @httpPut("/:id")
  public async updateBook(
    @requestParam("id") id: string,
    @request() req: express.Request,
    @response() res: express.Response
  ): Promise<express.Response> {
    const input: BookUpdateInput = { id, ...req.body };
    try {
      const result = await this.bookUpdateService.update(input);
      return res.status(200).json({ success: result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  @httpPost("/import")
  public async importBooks(
    @request() req: express.Request,
    @response() res: express.Response
  ): Promise<express.Response> {
    const path: string = req.body.path;
    try {
      const result = await this.bookImportService.importBooks(path);
      return res.status(200).json({ success: result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

  // @httpDelete("/:id")
  // private delete(
  //   @requestParam("id") id: string,
  //   @response() res: express.Response
  // ): Promise<void> {
  //   return this.fooService
  //     .delete(id)
  //     .then(() => res.sendStatus(204))
  //     .catch((err: Error) => {
  //       res.status(400).json({ error: err.message });
  //     });
  // }

