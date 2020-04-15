export class RouterError extends Error {
  public data: any;

  constructor(message: string, data: any) {
    super(message);
    this.name = "RouterError";
    this.data = data;
  }
}
