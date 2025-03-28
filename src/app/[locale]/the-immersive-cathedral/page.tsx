import { TitlePageLayout, TitlePageLayoutProps } from '@/layouts/TitlePageLayout'

import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'

import bgImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

export default async function TheImmersiveCathedral(props: GlobalStaticPageProps) {
  const { locale } = await props.params
  const { pages } = await getDictionary(locale)

  const links: TitlePageLayoutProps['links'] = [
    {
      target: '/molasse-and-its-weathering',
      label: pages.immersiveCathedral.actions.molasses,
    },
    {
      target: `#`,
      disabled: true,
      label: pages.immersiveCathedral.actions.conservation,
    },
    {
      target: `#`,
      disabled: true,
      label: pages.immersiveCathedral.actions.vaults,
    },
  ]

  return (
    <TitlePageLayout
      withHomeButton
      backButtonTarget="/"
      bgImg={bgImg}
      title={pages.immersiveCathedral.title}
      links={links}
      textColor="light"
      buttonColor="dark"
    />
  )
}
