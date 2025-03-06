import OldestStoneGame from './OldestStoneGame'

import bgImg from '@/assets/bg-images/frog-perspective-2.png'

export default function OldestStonePage() {
  return (
    <OldestStoneGame
      bgImg={bgImg}
      successTarget="/molasse-sandstone/molasse-gris"
      closeTarget="/molasse-sandstone/stones-of-the-cathedral"
    />
  )
}
