import { HttpException } from '../../../../src/common/exception/http.exception'
import { makeSut } from './process.mock'

describe('ProcessService tests', () => {
  const { sut, databaseServiceSpy } = makeSut()
  beforeEach(() => jest.resetAllMocks())

  describe('processList tests', () => {
    it('Should return the complete process list', () => {
      const getAllProcessSpy = jest.spyOn(databaseServiceSpy, 'getAllProcess')
      getAllProcessSpy.mockResolvedValueOnce([])

      expect(sut.processList()).resolves.toEqual([])
      expect(getAllProcessSpy).toHaveBeenCalled()
    })

    it('Should return the list of processes by name', () => {
      const getAllProcessByParamSpy = jest.spyOn(
        databaseServiceSpy,
        'getAllProcessByParam'
      )
      getAllProcessByParamSpy.mockResolvedValueOnce([])

      expect(sut.processList('test')).resolves.toEqual([])
      expect(getAllProcessByParamSpy).toHaveBeenCalledWith('name', 'test')
    })
  })

  describe('getProcessHistory', () => {
    const getProcessHistoryByParamSpy = jest.spyOn(
      databaseServiceSpy,
      'getProcessHistoryByParam'
    )

    it('Should return the history of a process', () => {
      getProcessHistoryByParamSpy.mockResolvedValueOnce({})

      expect(sut.getProcessHistory('test')).resolves.toEqual({})
      expect(getProcessHistoryByParamSpy).toHaveBeenCalledWith(
        'processId',
        'test'
      )
    })

    it('Should throw an error because a process with that id could not be found', () => {
      getProcessHistoryByParamSpy.mockResolvedValueOnce(undefined)

      expect(sut.getProcessHistory('test')).rejects.toThrow(
        new HttpException(
          400,
          'It was not possible to find a process with this id.'
        )
      )
      expect(getProcessHistoryByParamSpy).toHaveBeenCalledWith(
        'processId',
        'test'
      )
    })
  })
})
