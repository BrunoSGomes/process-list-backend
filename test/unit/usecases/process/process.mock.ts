import { DatabaseService } from '../../../../src/gateway/database.service'
import { transformClassToJestMock } from '../../../utils/transform.utils'
import { ProcessServiceForTest } from './process.stub'

export const makeSut = () => {
  const databaseServiceSpy = transformClassToJestMock(DatabaseService)
  return {
    sut: new ProcessServiceForTest(databaseServiceSpy as any),
    databaseServiceSpy
  }
}
