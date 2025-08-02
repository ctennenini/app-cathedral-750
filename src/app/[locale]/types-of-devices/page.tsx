import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import cornices from './cornices.jpg'
import copings from './copings.jpg'
import chamferedDripEdges from './chamfered-drip-edges.jpg'
import dripGlazes from './drip-glazes.jpg'
import rotatingDripEdges from './rotating-drip-edges.jpg'
import slopedRetreats from './sloped-retreats.jpg'
import slopedSupports from './sloped-supports.jpg'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.typesOfFeatures.title}
      subtitle={pages.typesOfFeatures.title}
      text={pages.typesOfFeatures.description}
      actions={[
        {
          type: 'quiz',
          label: pages.typesOfFeatures.back,
          target: '/conservation-strategies',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: cornices,
            label: pages.typesOfFeatures.cornices.title,
            href: '/types-of-devices/cornices',
          },
          {
            src: copings,
            label: pages.typesOfFeatures.copings.title,
            href: '/types-of-devices/copings',
          },
          {
            src: chamferedDripEdges,
            label: pages.typesOfFeatures.chamferedDripEdges.title,
            href: '/types-of-devices/chamfered-drip-edges',
          },
          {
            src: slopedRetreats,
            label: pages.typesOfFeatures.slopedRetreats.title,
            href: '/types-of-devices/sloped-retreats',
          },
          {
            src: rotatingDripEdges,
            label: pages.typesOfFeatures.rotatingDripEdges.title,
            href: '/types-of-devices/rotating-drip-edges',
          },
          {
            src: slopedSupports,
            label: pages.typesOfFeatures.slopedSupports.title,
            href: '/types-of-devices/sloped-supports',
          },
          {
            src: dripGlazes,
            label: pages.typesOfFeatures.dripGlazes.title,
            href: '/types-of-devices/drip-glazes',
          },
        ],
      }}
      backButtonTarget="/water-managment"
    />
  )
})
