export class BookOutput {
  public readonly id: number;
  public readonly title?: string;
  public readonly author?: string;

  constructor(data?: Partial<BookOutput>) {
    Object.assign(this, data);
  }
}
