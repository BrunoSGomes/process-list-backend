export interface Process {
  id: string
  name: string
  status: string
  createdBy: string
  createdAt: string
  finishedAt: string
}

export interface ProcessHistory {
  id: string
  processId: string
  history: History[]
}

interface History {
  createdAt: string
  description: string
}
