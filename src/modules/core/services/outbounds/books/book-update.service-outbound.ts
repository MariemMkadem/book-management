import { BookUpdateInput } from "../../../models/inputs/books/book-update.input";

export const BOOK_UPDATE_SERVICE_OUTBOUND = "BOOK_UPDATE_SERVICE_OUTBOUND";

export interface BookUpdateServiceOutbound {
  update(input: BookUpdateInput): Promise<boolean>;
}
