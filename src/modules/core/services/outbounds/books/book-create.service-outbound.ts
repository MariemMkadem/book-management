import { BookCreateInput } from "../../../models/inputs/books/book-create.input";

export const BOOK_CREATE_SERVICE_OUTBOUND = "BOOK_CREATE_SERVICE_OUTBOUND";

export interface BookCreateServiceOutbound {
  create(input: BookCreateInput): Promise<boolean>;
}
