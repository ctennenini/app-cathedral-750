import { makePage } from '@/components/makePage'
import { TitlePageLayout, TitlePageLayoutProps } from '@/layouts/TitlePageLayout'
import bgImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

export default makePage((dictionary) => {
  const page = dictionary.pages.immersiveCathedral

  const links: TitlePageLayoutProps['links'] = [
    {
      target: '/molasse-and-its-weathering',
      label: page.actions.molasses,
    },
    {
      target: `/conservation-strategies`,
      disabled: true,
      label: page.actions.conservation,
    },
    {
      target: `#`,
      disabled: true,
      label: page.actions.vaults,
    },
  ]

  return (
    <TitlePageLayout
      withHomeButton
      backButtonTarget="/"
      bgImg={bgImg}
      title={page.title}
      links={links}
      textColor="light"
      buttonColor="dark"
    />
  )
})
