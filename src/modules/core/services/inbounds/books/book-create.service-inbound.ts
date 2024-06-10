import { BookCreateInput } from "../../../models/inputs/books/book-create.input";

export const BOOK_CREATE_SERVICE_INBOUND = "BOOK_CREATE_SERVICE_INBOUND";

export interface BookCreateServiceInbound {
  create(input: BookCreateInput): Promise<boolean>;
}
