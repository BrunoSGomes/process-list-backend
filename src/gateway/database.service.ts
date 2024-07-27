import fs from 'fs/promises'
import {
  Process,
  ProcessHistory,
  ProcessHistoryKey,
  ProcessKey
} from '../usecases/process/process.interface'

export class DatabaseService {
  private async readData<T>(collection: string): Promise<T[]> {
    try {
      const result = await fs.readFile(`database/${collection}.json`, 'utf8')
      return JSON.parse(result)
    } catch (error) {
      throw new Error('Database connection failed.')
    }
  }

  public async getAllProcess(): Promise<Process[]> {
    return await this.readData<Process>('process')
  }

  public async getAllProcessByParam(
    key: ProcessKey,
    param: any
  ): Promise<Process[]> {
    const result = await this.readData<Process>('process')
    return result.filter((data) =>
      data[key].toLowerCase().includes(param.toLowerCase())
    )
  }

  public async getProcessHistoryByParam(
    key: ProcessHistoryKey,
    param: any
  ): Promise<ProcessHistory | undefined> {
    const result = await this.readData<ProcessHistory>('timeline')
    return result.find((data) => data[key] === param)
  }
}
