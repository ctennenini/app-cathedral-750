import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import exampletwo from './example-two.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.exampleTwo.title}
      subtitle={pages.contemporarySolutions.title}
      text={pages.exampleTwo.description}
      actions={[
        {
          type: 'quiz',
          label: pages.exampleTwo.Examples,
          target: '/contemporary-solutions/example-one',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: exampletwo,
            label: pages.exampleTwo.title,
          },
        ],
      }}
      backButtonTarget="/contemporary-solutions"
    />
  )
})
