import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import scalingExample from './scaling.png'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.degradationTypes

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.scaling.title}
      subtitle={page.title}
      text={page.scaling.description}
      nextButtonTarget="/degradation-types/sanding"
      backButtonTarget="/degradation-types/black-crust-menu"
      pullOutContent={[
        {
          type: 'image',
          src: scalingExample,
        },
      ]}
    />
  )
})
