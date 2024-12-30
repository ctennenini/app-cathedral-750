import { OldestStoneGameParams } from './OldestStoneGame'

export type Action = {
  label: string
} & (
  | {
      type: 'link'
      target: string
    }
  | {
      type: 'oldestStoneGame'
      params: OldestStoneGameParams
    }
)
