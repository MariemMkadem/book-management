
export const BOOK_IMPORT_SERVICE_OUTBOUND = "BOOK_IMPORT_SERVICE_OUTBOUND";

export interface BookImportServiceOutbound {
    importBooks(path: string): Promise<boolean>;
  }

