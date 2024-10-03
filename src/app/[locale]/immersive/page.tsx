import Image from 'next/image'
import { Actions, BaseLayout } from '@/components'
import { GlobalStaticPageProps } from '../layout'
import bgImg from './bg-img.png'
import { getDictionary } from '@/i18n'


export default async function TheImmersiveCathedral({ params: { locale } }: GlobalStaticPageProps) {
  const {start} = await getDictionary(locale)
  
  return (
    <BaseLayout
      dark
      title={start.title}
      subtitle={start.subTitle}
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
