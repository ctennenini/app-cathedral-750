import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.webp'

import img1 from './risk.gif'
import consolidation from './cons.webp'
import pin from './pin.webp'
import mortarfill from './mortarfill.webp'
import substitution from './substitution.webp'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.stoneConservation.title}
      // subtitle={pages.conservationStrategies.title}
      text={pages.stoneConservation.description}
      backButtonTarget="/conservation-strategies"
      actions={[
        {
          type: 'back',
          label: pages.conservationStrategies.title,
          target: '/conservation-strategies',
        },
      ]}
      pullOutContent={[
        {
          type: 'image',
          src: img1,
        },
        {
        type: 'gallery',
        items: [
          {
            src: consolidation,
            label: pages.consolidation.title,
            href: '/stone-conservation/consolidation',
          },
          {
            src: pin,
            label: pages.scalingFixing.title,
            href: '/stone-conservation/scaling-fixing',
          },
          {
            src: mortarfill,
            label: pages.mortar.title,
            href: '/stone-conservation/mortar-fixing',
          },
          {
            src: substitution,
            label: pages.substitution.title,
            href: '/stone-conservation/substitution',
          },          
         ]
         },    
      ]}
    />
  )
})
