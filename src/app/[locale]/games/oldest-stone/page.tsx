import { makePage } from '@/components/makePage'
import OldestStoneGame from './OldestStoneGame'

import bgImg from '@/assets/bg-images/frog-perspective-2.webp'

export default makePage(() => {
  return (
    <OldestStoneGame
      bgImg={bgImg}
      successTarget="/molasse-sandstone/molasse-gris"
      closeTarget="/molasse-sandstone/stones-of-the-cathedral?page=2"
    />
  )
})
