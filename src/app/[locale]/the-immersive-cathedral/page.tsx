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
      target: '/conservation-strategies',
      label: page.actions.conservation,
    },
    {
      target: '/video-gallery',
      label: page.actions.videoGallery,
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
