import { redirect } from 'next/navigation'
import { TitlePageLayout, TitlePageLayoutProps } from '@/layouts/TitlePageLayout'

import { getDictionary } from '@/i18n'

import bgImg from '@/assets/bg-images/dusk-wide-angel-blur-vignette.png'
import { GlobalStaticPageProps } from '@/globals'
import { languages, defaultLanguage } from '@/config'

export default async function Home(props: GlobalStaticPageProps) {
  const { locale } = await props.params

  if (!languages.includes(locale)) {
    return redirect(`/${defaultLanguage}`)
  }

  const { pages } = await getDictionary(locale)

  const links: TitlePageLayoutProps['links'] = [
    {
      target:
        'https://www.lake-geneva-switzerland.com/lausanne/visit-lausanne-cathedral-the-largest-gothic-church-in-switzerland/',
      label: pages.start.actions.website,
      external: true,
    },
    {
      target: '#',
      label: pages.start.actions.birthday,
      disabled: true,
    },
    {
      target: `/the-immersive-cathedral`,
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
      links={links}
      buttonColor="light"
      textColor="light"
      titleStyle={{
        fontSize: '137em',
      }}
    />
  )
}
