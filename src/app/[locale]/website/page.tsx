import bgImg from '@/assets/bg-images/dusk-wide-angel-blur-vignette.webp'

import { makePage } from '@/components/makePage'
import { CATHEDRAL_WEBSITE_URL } from '@/config'
import { BackButton } from '@/components/BackButton'
import { WebsiteFrame, WebsiteTitle } from '@/components/kiosk/WebsiteFrame'
import { Container, Header } from '@/layouts/TitlePageLayout/TitlePageLayout.styled'

export default makePage((dictionary) => {
  const title = dictionary.pages.start.actions.website

  return (
    <Container bgImg={bgImg} bgImgAlt="" blurredBackground darkenedBackground>
      <Header
        left={
          <>
            <BackButton href="/" />
            <WebsiteTitle>{title}</WebsiteTitle>
          </>
        }
      />
      <WebsiteFrame url={CATHEDRAL_WEBSITE_URL} title={title} offlineText={dictionary.kiosk.websiteOffline} />
    </Container>
  )
})
