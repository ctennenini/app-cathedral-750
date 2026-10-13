import { makePage } from '@/components/makePage'
import QuarriesGame from './QuarriesGame'
import bgImg from '@/assets/bg-images/frog-perspective-2.webp'

export default makePage(() => {
  return <QuarriesGame bgImg={bgImg} closeTarget="/molasse-sandstone/geological-information?page=2" />
})
