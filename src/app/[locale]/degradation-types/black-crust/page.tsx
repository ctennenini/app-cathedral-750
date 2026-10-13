import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import blackCrustExample from './black-crust-example.webp'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.degradationTypes

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.blackCrust.title}
      subtitle={page.title}
      text={page.blackCrust.description}
      nextButtonTarget="/degradation-types/scaling"
      backButtonTarget="/degradation-types"
      pullOutContent={[
        {
          type: 'image',
          src: blackCrustExample,
        },
      ]}
    />
  )
})
