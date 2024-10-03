import Image from 'next/image'
import { Actions, BaseLayout } from '@/components'
import { GlobalStaticParams } from '../layout'
import bgImg from './bg-img.png'

export default function TheImmersiveCathedral({ params: { locale, ...rest } }: { params: GlobalStaticParams }) {
  console.log({ locale, ...rest })
  return (
    <BaseLayout
      dark
      title="La Cathédrale Immersive"
      left={
        <Image
          src={bgImg}
          alt="background image"
          placeholder="blur"
          quality={100}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      }
      right={
        <Actions
          actions={[
            {
              href: 'immersive/molasses-degradation',
              label: 'Molasse et sa dégradation',
            },
            {
              href: '#',
              label: 'Stratégies de conservation',
              disabled: true,
            },
            {
              href: '#',
              label: 'Les voûtes de la cathédrale',
              disabled: true,
            },
          ]}
        />
      }
      navItems={[
        {
          href: `start`,
          label: 'Back',
        },
      ]}
    />
  )
}
