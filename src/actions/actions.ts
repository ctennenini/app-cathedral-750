import { OldestStoneGameParams } from './OldestStoneGame'
import { DegradationTypesGameParams } from './DegradationTypesGame'

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
  | {
      type: 'degradationTypesGame'
      params: DegradationTypesGameParams
    }
)
