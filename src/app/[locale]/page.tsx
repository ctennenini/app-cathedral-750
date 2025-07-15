import { TitlePageLayout, TitlePageLayoutProps } from '@/layouts/TitlePageLayout'

import bgImg from '@/assets/bg-images/dusk-wide-angel-blur-vignette.png'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.start

  const links: TitlePageLayoutProps['links'] = [
    {
      target:
        'https://www.cathedrale-lausanne.ch/accueil/',
      label: page.actions.website,
      external: true,
    },
    {
      target: '#',
      label: page.actions.birthday,
      disabled: true,
    },
    {
      target: `/the-immersive-cathedral`,
      label: page.actions.immersive,
      $primary: true,
      arrow: true,
    },
  ]

  return (
    <TitlePageLayout
      title={page.title}
      subtitle={page.subtitle}
      bgImg={bgImg}
      links={links}
      buttonColor="light"
      textColor="light"
      titleStyle={{
        fontSize: '137em',
      }}
    />
  )
})
