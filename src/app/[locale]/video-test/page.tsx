import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'

import videoT1 from './videoT1.png'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.videoTest.title}
      titleProps={{
        style: { fontSize: '54em' },
      }}
      text={pages.videoTest.description}
      backButtonTarget="/molasse-and-its-weathering"
      
      pullOutContent={[
        {
          type: 'image',
          src: videoT1,
        },
      ]}
    />
  )
})
