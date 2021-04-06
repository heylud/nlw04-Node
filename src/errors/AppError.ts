export class AppError {
  public readonly message: string;
  public readonly stattusCode: number;

  constructor(message: string, stattusCode = 400) {
    this.message = message;
    this.stattusCode = stattusCode;
  }
}