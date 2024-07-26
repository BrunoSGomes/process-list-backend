import { Request, Response } from 'express'
import { ProcessService } from './process.service'

const processService = new ProcessService()

export const processList = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = await processService.processList('test')
  res.status(200).send(response)
}

export const getProcessHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = await processService.getProcessHistory('test')
  res.status(200).send(response)
}
