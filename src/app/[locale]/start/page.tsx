import { BaseLayout, Actions } from '@/components'

import bgImg from './bg-img.png'
import { GlobalStaticProps } from '../layout'
import { getDictionary } from '@/i18n'

export default async function Start({ params: { locale } }: GlobalStaticProps) {
  const {start} = await getDictionary(locale)
  
  return (
    <BaseLayout
      title={start.title}
      subtitle={start.subTitle}
      bgImg={bgImg}
      right={
        <Actions
          actions={[
            {
              href: 'https://www.lake-geneva-switzerland.com/lausanne/visit-lausanne-cathedral-the-largest-gothic-church-in-switzerland/',
              label: 'Cathedral Web Site',
              external: true,
            },
            {
              href: `#`,
              label: '750th birthday',
              disabled: true,
            },
            {
              href: `immersive`,
              label: 'Cathedral Immersive',
            },
          ]}
        />
      }
    ></BaseLayout>
  )
}
