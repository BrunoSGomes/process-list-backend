import fs from 'fs/promises'

export const databaseMock = async <T>(collection: string): Promise<T[]> => {
  const data = await fs.readFile(`database/${collection}.json`, 'utf8')
  return JSON.parse(data)
}
