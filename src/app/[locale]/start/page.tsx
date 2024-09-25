import { BaseLayout } from '@/components'
import { GlobalStaticParams } from '../layout'
import bgImg from './bg-img.png'

export default function Start({
  params: { locale, ...rest },
}: {
  params: GlobalStaticParams
}) {
  console.log({ locale, ...rest })
  return (
    <BaseLayout
      title="Start"
      subtitle="subtle subtitle"
      bgImg={bgImg}
      actions={[
        {
          href: 'https://www.lake-geneva-switzerland.com/lausanne/visit-lausanne-cathedral-the-largest-gothic-church-in-switzerland/',
          label: 'Cathedral Web Site',
        },
        {
          href: `/${locale}/start`,
          label: '750th birthday',
        },
        {
          href: `/${locale}/start`,
          label: 'Cathedral Immersive',
        },
      ]}
    ></BaseLayout>
  )
}
