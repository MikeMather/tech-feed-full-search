

export default class HttpError extends Error {
  statusCode: number;

  constructor(public status: number, public message: string) {
      super(message);
      this.statusCode = status;
  }
}