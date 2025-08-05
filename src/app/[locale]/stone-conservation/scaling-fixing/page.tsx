import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'

import pin5 from './pin6.png'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.scalingFixing.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.conservationStrategies.title}
      text={pages.scalingFixing.description}
      backButtonTarget="/stone-conservation?page=2"
      
      pullOutContent={[
        {
          type: 'image',
          src: pin5,
        },
      ]}
    />
  )
})
