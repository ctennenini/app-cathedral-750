import { ImageProps } from 'next/image'
import { Container, LanguageSwitcher, Left, Header, CloseButton, Right } from './QuizPageLayout.styled'
import { HREF } from '@/utils'

export type QuizPageLayoutProps = {
  left: React.ReactNode
  right: React.ReactNode
  closeTarget: HREF
  bgImg: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
}

export function QuizPageLayout({
  bgImg,
  bgImgAlt = 'background image',
  left,
  right,
  closeTarget,
}: QuizPageLayoutProps) {
  return (
    <Container bgImg={bgImg} bgImgAlt={bgImgAlt}>
      <Left>
        <Header left={<CloseButton target={closeTarget} />} />
        {left}
      </Left>
      <Right>{right}</Right>
      <LanguageSwitcher />
    </Container>
  )
}
