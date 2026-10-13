import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import twentyone from './21CE.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.twentyoneCE.title}
      subtitle={pages.waterManagement.actions.evolution}
      text={pages.twentyoneCE.description}
      actions={[
        {
          type: 'quiz',
          label: pages.twentyoneCE.Back,
          target: '/water-managment',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: twentyone,
          },
        ],
      }}
      backButtonTarget="/water-managment"
    />
  )
})