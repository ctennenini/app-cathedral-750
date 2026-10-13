import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import sandingExample from './sandling.webp'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.degradationTypes

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.sanding.title}
      subtitle={page.title}
      text={page.sanding.description}
      nextButtonTarget="/degradation-types/biodeterioration-menu"
      backButtonTarget="/degradation-types/scaling-menu"
      pullOutContent={[
        {
          type: 'image',
          src: sandingExample,
        },
      ]}
    />
  )
})
