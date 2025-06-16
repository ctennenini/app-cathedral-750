import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'

import interactive from './interactive.png'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.interactiveMenu.title}
      titleProps={{
        style: { fontSize: '54em' },
      }}
      text={pages.interactiveMenu.description}
      backButtonTarget="/molasse-and-its-weathering"
      
      pullOutContent={[
        {
          type: 'image',
          src: interactive,
        },
      ]}
    />
  )
})
