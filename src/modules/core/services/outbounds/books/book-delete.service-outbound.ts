export const BOOK_DELETE_SERVICE_OUTBOUND = "BOOK_DELETE_SERVICE_OUTBOUND";

export interface BookDeleteServiceOutbound {
    delete(id: string): Promise<boolean>;
    findById(id: string): Promise<boolean>;
}