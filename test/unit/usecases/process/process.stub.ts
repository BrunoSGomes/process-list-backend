import {
  Process,
  ProcessHistory
} from '../../../../src/usecases/process/process.interface'
import { ProcessService } from '../../../../src/usecases/process/process.service'

export class ProcessServiceForTest extends ProcessService {
  public async processList(name?: string): Promise<Process[]> {
    return await super.processList(name)
  }

  public async getProcessHistory(id: string): Promise<ProcessHistory> {
    return await super.getProcessHistory(id)
  }
}
