import { redirect } from 'next/navigation'
import { TitlePageLayout, TitlePageLayoutProps } from '@/layouts/TitlePageLayout'

import { getDictionary } from '@/i18n'

import bgImg from '@/assets/bg-images/dusk-wide-angel-blur-vignette.png'
import { GlobalStaticPageProps } from '@/globals'
import { languages, defaultLanguage } from '@/config'

export default async function Home({ params: { locale } }: GlobalStaticPageProps) {
  if (!languages.includes(locale)) {
    return redirect(`/${defaultLanguage}`)
  }

  const { pages } = await getDictionary(locale)

  const actionItems: TitlePageLayoutProps['links'] = [
    {
      href: 'https://www.lake-geneva-switzerland.com/lausanne/visit-lausanne-cathedral-the-largest-gothic-church-in-switzerland/',
      label: pages.start.actions.website,
      external: true,
    },
    {
      href: `#`,
      label: pages.start.actions.birthday,
      disabled: true,
    },
    {
      href: `/the-immersive-cathedral`,
      label: pages.start.actions.immersive,
      $primary: true,
      arrow: true,
    },
  ]

  return (
    <TitlePageLayout
      title={pages.start.title}
      subtitle={pages.start.subtitle}
      bgImg={bgImg}
      links={actionItems}
      buttonColor="light"
      textColor="light"
      titleStyle={{
        fontSize: 137,
      }}
    />
  )
}
