import { Process, ProcessHistory } from './process.interface'

export class ProcessService {
  constructor() {}

  public async processList(name?: string): Promise<Process[]> {
    return []
  }

  public async getProcessHistory(id: string): Promise<ProcessHistory> {
    return {} as any
  }
}
