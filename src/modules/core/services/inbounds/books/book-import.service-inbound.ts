export const BOOK_IMPORT_SERVICE_INBOUND = "BOOK_IMPORT_SERVICE_INBOUND";

export interface BookImportServiceInbound {
  importBooks(path: string): Promise<boolean>;
}

