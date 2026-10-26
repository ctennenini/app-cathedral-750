import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import scalingExample from './scaling-example.webp'

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
      nextButtonTarget="/degradation-types/biodeterioration"
      backButtonTarget="/degradation-types/black-crust"
      pullOutContent={[
        {
          type: 'image',
          src: scalingExample,
        },
      ]}
    />
  )
})
