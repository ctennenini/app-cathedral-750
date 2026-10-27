import bgImg from '@/assets/bg-images/dawn-over-roof-tops.webp'

import quizImg from './crystallization-pressure.jpg'

import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.saltCrystallization.crystallizationPressure.title}
      subtitle={pages.saltCrystallization.title}
      text={pages.saltCrystallization.crystallizationPressure.description}
      backButtonTarget="/weathering-mechanisms"
      nextButtonTarget="/salt-crystallization/gypsum"
      pullOutContent={{
        type: 'image',
        src: quizImg,
        alt: pages.saltCrystallization.crystallizationPressure.title,
      }}
    />
  )
})
