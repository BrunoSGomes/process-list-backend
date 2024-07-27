import { HttpException } from '../../common/exception/http.exception'
import { DatabaseService } from '../../gateway/database.service'
import { Process, ProcessHistory } from './process.interface'

export class ProcessService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async processList(name?: string): Promise<Process[]> {
    if (name) {
      return await this.databaseService.getAllProcessByParam('name', name)
    }

    return await this.databaseService.getAllProcess()
  }

  public async getProcessHistory(id: string): Promise<ProcessHistory> {
    const response = await this.databaseService.getProcessHistoryByParam(
      'id',
      id
    )

    if (!response) {
      throw new HttpException(
        400,
        'It was not possible to find a process with this id.'
      )
    }

    return response
  }
}
