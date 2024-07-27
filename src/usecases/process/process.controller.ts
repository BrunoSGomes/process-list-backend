import { Request, Response, NextFunction } from 'express'
import { ProcessService } from './process.service'
import { DatabaseService } from '../../gateway/database.service'

const processService = new ProcessService(new DatabaseService())

export const processList = async (
  req: Request<any, any, any, { name?: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const response = await processService.processList(req.query.name)
    res.status(200).send(response)
  } catch (error) {
    next(error)
  }
}

export const getProcessHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const response = await processService.getProcessHistory(req.params.id)
    res.status(200).send(response)
  } catch (error) {
    next(error)
  }
}
