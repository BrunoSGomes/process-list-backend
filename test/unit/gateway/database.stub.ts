import { DatabaseService } from '../../../src/gateway/database.service'
import {
  Process,
  ProcessHistory,
  ProcessHistoryKey,
  ProcessKey
} from '../../../src/usecases/process/process.interface'

export class DatabaseServiceForTest extends DatabaseService {
  public async readData<T>(collection: string): Promise<T[]> {
    return await super.readData(collection)
  }

  public async getAllProcess(): Promise<Process[]> {
    return await super.getAllProcess()
  }

  public async getAllProcessByParam(
    key: ProcessKey,
    param: any
  ): Promise<Process[]> {
    return await super.getAllProcessByParam(key, param)
  }

  public async getProcessHistoryByParam(
    key: ProcessHistoryKey,
    param: any
  ): Promise<ProcessHistory | undefined> {
    return await super.getProcessHistoryByParam(key, param)
  }
}
