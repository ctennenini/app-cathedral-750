import { OldestStoneGameParams } from './OldestStoneGame'
import { DegradationTypesGameParams } from './DegradationTypesGame'
import { Text } from '@/components/Typography'
import { BigLinkProps } from '@/components/Links'

export type Action = {
  label: Text
} & (
  | {
      type: 'link'
      params: Omit<BigLinkProps, 'label'>
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
