import { TitlePageLayout, TitlePageLayoutProps } from '@/layouts/TitlePageLayout'

import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'

import bgImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

export default async function TheImmersiveCathedral({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const links: TitlePageLayoutProps['links'] = [
    {
      href: 'molasses',
      label: immersiveCathedral.actions.molasses,
    },
    {
      href: `#`,
      disabled: true,
      label: immersiveCathedral.actions.conservation,
    },
    {
      href: `#`,
      disabled: true,
      label: immersiveCathedral.actions.vaults,
    },
  ]

  return (
    <TitlePageLayout
      withHomeButton
      backButtonTarget="/"
      bgImg={bgImg}
      title={immersiveCathedral.title}
      links={links}
      textColor="light"
      buttonColor="dark"
    />
  )
}
