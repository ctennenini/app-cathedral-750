import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import dripstonesBackjpg from './dripstones-back.webp'
import ineffectiveDrips from './ineffective-dripstones.webp'
import profile from './profile-adapt.webp'
import rotating from './rotating-retain.webp'
import without from './without-dripcuts.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.failureSituations.title}
      subtitle={pages.waterManagement.title}
      text={pages.failureSituations.description}
      actions={[
        {
          type: 'quiz',
          label: pages.failureSituations.contemporarySolutions,
          target: '/contemporary-solutions',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: ineffectiveDrips,
            label: pages.failureSituations.ineffectiveDripstones.title,
          },
          {
            src: dripstonesBackjpg,
            label: pages.failureSituations.dripstonesBack.title,
          },
          {
            src: without,
            label: pages.failureSituations.withoutDripcuts.title,
          },
          {
            src: rotating,
            label: pages.failureSituations.rotatingRetain.title,
          },
          {
            src: profile,
            label: pages.failureSituations.profileAdapt.title,
          },
        ],
      }
    }
    backButtonTarget="/water-managment"
    />
  )
})
