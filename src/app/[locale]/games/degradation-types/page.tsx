import { makePage } from '@/components/makePage'
import { DegradationTypesGame } from './DegradationTypesGame'

import bgImg from '@/assets/bg-images/frog-perspective-1.webp'

export default makePage(() => {
  return (
    <DegradationTypesGame
      bgImg={bgImg}
      successTarget="/degradation-types/black-crust"
      closeTarget="/degradation-types?page=2"
    />
  )
})
