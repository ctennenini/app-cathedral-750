import { ImageProps } from 'next/image'
import { Container, LanguageSwitcher, Left, Header, CloseButton, Right } from './QuizPageLayout.styled'
import { HREF } from '@/utils/utils'

export type QuizPageLayoutProps = {
  left: React.ReactNode
  right: React.ReactNode
  closeTarget: HREF
  bgImg: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  success?: boolean
}

export function QuizPageLayout({
  bgImg,
  bgImgAlt = 'background image',
  left,
  right,
  closeTarget,
  success,
}: QuizPageLayoutProps) {
  return (
    <Container bgImg={bgImg} bgImgAlt={bgImgAlt}>
      <Left $success={success}>
        <Header left={<CloseButton target={closeTarget} />} />
        {left}
      </Left>
      <Right>{right}</Right>
      <LanguageSwitcher />
    </Container>
  )
}
