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

  const { start } = await getDictionary(locale)

  const actionItems: TitlePageLayoutProps['links'] = [
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
      href: `/immersive`,
      label: start.actions.immersive,
      $primary: true,
      arrow: true,
    },
  ]

  return (
    <TitlePageLayout
      title={start.title}
      subtitle={start.subtitle}
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
