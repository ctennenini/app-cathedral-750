import { TitlePageLayout, TitlePageLayoutProps } from '@/components'

import { GlobalStaticPageProps } from '../layout'
import { getDictionary } from '@/i18n'

import bgImg from '@/assets/bg-images/dusk-wide-angel-blur-vignette.png'

export default async function Start({ params: { locale } }: GlobalStaticPageProps) {
  const { start } = await getDictionary(locale)

  const navItems: TitlePageLayoutProps['navItems'] = [
    {
      href: 'https://www.lake-geneva-switzerland.com/lausanne/visit-lausanne-cathedral-the-largest-gothic-church-in-switzerland/',
      label: start.actions.website,
      external: true,
    },
    {
      href: `#`,
      label: start.actions.birthday,
      disabled: true,
    },
    {
      href: `immersive`,
      label: start.actions.immersive,
    },
  ]

  return (
    <TitlePageLayout
      dark
      title={start.title}
      subtitle={start.subTitle}
      bgImg={bgImg}
      navItems={navItems}
    />
  )
}
