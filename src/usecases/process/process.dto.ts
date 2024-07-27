import Ajv from 'ajv'
import { RequestHandler } from 'express'

const ajv = new Ajv()

const searchSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
  additionalProperties: false,
}

export const validateSearch = (): RequestHandler => {
  return (req, res, next) => {
    const valid = ajv.validate(searchSchema, req.query)
    if (!valid) {
      return res.status(400).send({ errors: ajv.errorsText() })
    }

    return next()
  }
}

const getHistorySchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  required: ['id'],
  additionalProperties: false,
}

export const validateGetHistory = (): RequestHandler => {
  return (req, res, next) => {
    const valid = ajv.validate(getHistorySchema, req.params)
    if (!valid) {
      return res.status(400).send({ errors: ajv.errorsText() })
    }

    return next()
  }
}
