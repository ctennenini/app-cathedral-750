import { DegradationTypesGame } from './DegradationTypesGame'

import bgImg from '@/assets/bg-images/frog-perspective-1.png'

export default function DegradationTypesPage() {
  return (
    <DegradationTypesGame
      bgImg={bgImg}
      successTarget="/degradation-types/black-crust"
      closeTarget="/degradation-types?page=2"
    />
  )
}
