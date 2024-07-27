export class HttpException extends Error {
  status: number
  response: any

  constructor(status: number, message: string, response?: any) {
    super(message)
    this.status = status
    this.response = response
  }
}
