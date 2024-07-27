import { makeSut } from './database.mock'
import fs from 'fs/promises'

jest.mock('fs/promises')

describe('DatabaseService tests', () => {
  const { sut } = makeSut()
  beforeEach(() => jest.resetAllMocks())

  describe('readData', () => {
    const readFileSpy = jest.spyOn(fs, 'readFile')

    it('Should return the complete database', () => {
      readFileSpy.mockResolvedValueOnce('[]')

      expect(sut.readData('test')).resolves.toEqual([])
      expect(readFileSpy).toHaveBeenCalledWith('database/test.json', 'utf8')
    })

    it('Should throw an error because the database connection failed', () => {
      readFileSpy.mockRejectedValueOnce(new Error('test'))

      expect(sut.readData('test')).rejects.toThrow(
        new Error('Database connection failed.')
      )
      expect(readFileSpy).toHaveBeenCalledWith('database/test.json', 'utf8')
    })
  })

  describe('getAllProcess', () => {
    it('Should return the complete process list', () => {
      const readDataSpy = jest.spyOn(sut, 'readData')
      readDataSpy.mockResolvedValueOnce([])

      expect(sut.getAllProcess()).resolves.toEqual([])
      expect(readDataSpy).toHaveBeenCalledWith('process')
    })
  })

  describe('getAllProcessByParam', () => {
    it('Should return the filtered process list', () => {
      const readDataSpy = jest.spyOn(sut, 'readData')
      readDataSpy.mockResolvedValueOnce([{ name: 'test' }, { name: 'mock' }])

      expect(sut.getAllProcessByParam('name', 'test')).resolves.toEqual([
        { name: 'test' }
      ])
      expect(readDataSpy).toHaveBeenCalledWith('process')
    })
  })

  describe('getProcessHistoryByParam', () => {
    it('Should return the history of a process', () => {
      const readDataSpy = jest.spyOn(sut, 'readData')
      readDataSpy.mockResolvedValueOnce([{ id: 'test' }, { id: 'mock' }])

      expect(sut.getProcessHistoryByParam('id', 'test')).resolves.toEqual({
        id: 'test'
      })
      expect(readDataSpy).toHaveBeenCalledWith('timeline')
    })
  })
})
