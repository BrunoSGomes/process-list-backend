export interface Process {
  id: string
  name: string
  status: string
  createdBy: string
  createdAt: string
  finishedAt: string
}

export type ProcessKey = keyof Process

export interface ProcessHistory {
  id: string
  processId: string
  history: History[]
}

interface History {
  createdAt: string
  description: string
}

export type ProcessHistoryKey = keyof ProcessHistory
