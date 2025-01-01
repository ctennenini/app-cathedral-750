import { TitlePageLayout, TitlePageLayoutProps } from '@/layouts/TitlePageLayout'

import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'

import bgImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

export default async function TheImmersiveCathedral({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const actionItems: TitlePageLayoutProps['links'] = [
    {
      href: 'molasses',
      label: immersiveCathedral.actions.molasses,
    },
    {
      href: `#`,
      label: immersiveCathedral.actions.conservation,
    },
    {
      href: `#`,
      label: immersiveCathedral.actions.vaults,
    },
  ]

  return (
    <TitlePageLayout
      withHomeButton
      backButtonTarget="/start"
      bgImg={bgImg}
      title={immersiveCathedral.title}
      links={actionItems}
      textColor="light"
      buttonColor="dark"
    />
  )
}
