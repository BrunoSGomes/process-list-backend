import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import * as processController from '../usecases/process/process.controller'
import {
  validateGetHistory,
  validateSearch,
} from '../usecases/process/process.dto'
import { handleError } from '../middleware/handle-error.middleware'

dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.get('/process-list', validateSearch(), processController.processList)
app.get(
  '/get-process-history/:id',
  validateGetHistory(),
  processController.getProcessHistory
)
app.use(handleError())

export default app
