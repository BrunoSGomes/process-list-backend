import { ErrorRequestHandler } from 'express'
import { HttpException } from '../common/exception/http.exception'

export const handleError = (): ErrorRequestHandler => {
  return (err, req, res) => {
    if (err instanceof HttpException) {
      const httpError = err as HttpException
      return res
        .status(httpError.status)
        .send({ error: httpError.response || httpError.message })
    }

    console.error(err)
    return res.status(500).send({ error: 'Internal Server Error' })
  }
}
