import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import exampleone from './example-one.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.exampleOne.title}
      subtitle={pages.contemporarySolutions.title}
      text={pages.exampleOne.description}
      actions={[
        {
          type: 'quiz',
          label: pages.exampleOne.Examples,
          target: '/contemporary-solutions/example-two',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: exampleone,
            label: pages.exampleOne.title,
          },
        ],
      }}
      backButtonTarget="/contemporary-solutions"
    />
  )
})
