import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'

import img1 from './risk.gif'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages.stoneConservation

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.title}
      text={pages.description}
      backButtonTarget="/conservation-strategies"
    />
  )
})
