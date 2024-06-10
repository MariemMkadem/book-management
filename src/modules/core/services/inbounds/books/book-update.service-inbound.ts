import { BookUpdateInput } from "../../../models/inputs/books/book-update.input";

export const BOOK_UPDATE_SERVICE_INBOUND = "BOOK_UPDATE_SERVICE_INBOUND";

export interface BookUpdateServiceInbound {
  update(input: BookUpdateInput): Promise<boolean>;
}
