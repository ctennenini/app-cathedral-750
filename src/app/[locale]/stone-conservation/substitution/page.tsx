import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.webp'

import sub5 from './stonereplacement.webp'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.substitution.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.conservationStrategies.title}
      text={pages.substitution.description}
      backButtonTarget="/stone-conservation?page=2"
      
      pullOutContent={[
        {
          type: 'image',
          src: sub5,
        },
      ]}
    />
  )
})
