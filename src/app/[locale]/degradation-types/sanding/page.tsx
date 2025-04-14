import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import sandingExample from './sanding-example.jpeg'

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
      nextButtonTarget="/degradation-types/biodeterioration"
      backButtonTarget="/degradation-types/scaling"
      pullOutContent={[
        {
          type: 'image',
          src: sandingExample,
        },
      ]}
    />
  )
})
