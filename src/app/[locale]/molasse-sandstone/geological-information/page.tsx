import bgImg from '@/assets/bg-images/frog-perspective-2.png'

import map from './map-of-switzerland.png'
import mapWithOverlay from './map-of-switzerland-with-overlay.png'
import molasseFacies from './molasse-facies.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.molasseSandstone

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.geologicalInformation.title}
      subtitle={page.title}
      text={page.geologicalInformation.description}
      backButtonTarget="/molasse-sandstone"
      actions={[
        {
          type: 'back',
          label: page.title,
          target: '/molasse-sandstone',
        },
      ]}
      pullOutContent={[
        {
          type: 'image',
          src: map,
        },
        {
          type: 'image',
          src: mapWithOverlay,
          clickAreas: [
            {
              target: '/games/quarries',
              style: {
                width: '80%',
                height: '30%',
                left: '0',
                transform: 'rotate(-29deg)',
                top: '25%',
              },
            },
          ],
        },
        {
          type: 'image',
          src: molasseFacies,
        },
      ]}
    />
  )
})
