import { DatabaseServiceForTest } from './database.stub'

export const makeSut = () => {
  return {
    sut: new DatabaseServiceForTest()
  }
}
