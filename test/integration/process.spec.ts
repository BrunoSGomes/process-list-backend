import request from 'supertest'
import app from '../../src/config/config'
import { databaseMock } from './process.mock'
import {
  Process,
  ProcessHistory
} from '../../src/usecases/process/process.interface'

describe('Process tests', () => {
  describe('GET /process-list', () => {
    it('Should return the complete process list', async () => {
      const response = await request(app).get('/process-list')

      expect(response.status).toEqual(200)
      expect(response.body).toEqual(await databaseMock<Process>('process'))
    })

    it('Should return the list of processes by name', async () => {
      const response = await request(app).get('/process-list?name=memo')

      expect(response.status).toEqual(200)
      expect(response.body).toEqual(
        (await databaseMock<Process>('process')).filter((process) =>
          process.name.toLowerCase().includes('memo')
        )
      )
    })
  })

  describe('GET /get-process-history/:id', () => {
    it('Should return the history of a process', async () => {
      const response = await request(app).get(
        '/get-process-history/63e6bbd3fd58d83a623bc070'
      )

      expect(response.status).toEqual(200)
      expect(response.body).toEqual(
        (await databaseMock<ProcessHistory>('timeline')).find(
          (timeline) => timeline.id === '63e6bbd3fd58d83a623bc070'
        )
      )
    })

    it('Should throw an error because a process with that id could not be found', async () => {
      const response = await request(app).get('/get-process-history/123')
      expect(response.status).toEqual(400)
      expect(response.body).toEqual({
        error: 'It was not possible to find a process with this id.'
      })
    })
  })
})
