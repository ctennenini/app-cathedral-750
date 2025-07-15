import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'

import mort5 from './mort5.png'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.mortar.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.conservationStrategies.title}
      text={pages.mortar.description}
      backButtonTarget="/stone-conservation?page=2"
      
      pullOutContent={[
        {
          type: 'image',
          src: mort5,
        },
      ]}
    />
  )
})
