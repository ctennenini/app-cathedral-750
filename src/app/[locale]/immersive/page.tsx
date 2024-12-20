import { TitlePageLayout, TitlePageLayoutProps } from '@/components'
import { GlobalStaticPageProps } from '../layout'
import { getDictionary } from '@/i18n'

import bgImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

export default async function TheImmersiveCathedral({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const actionItems: TitlePageLayoutProps['actionItems'] = [
    {
      href: '#',
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
      bgImg={bgImg}
      title={immersiveCathedral.title}
      actionItems={actionItems}
    />
  )
}
