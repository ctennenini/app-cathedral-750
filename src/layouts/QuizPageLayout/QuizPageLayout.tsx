import { ImageProps } from 'next/image'
import { Container, LanguageSwitcher, Left, Header, CloseButton, Right } from './QuizPageLayout.styled'

export type QuizPageLayoutProps = {
  left: React.ReactNode
  right: React.ReactNode
  bgImg: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  onClose: () => void
}

export function QuizPageLayout({ bgImg, bgImgAlt = 'background image', left, right, onClose }: QuizPageLayoutProps) {
  return (
    <Container
      blurBackground
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
    >
      <Left>
        <Header left={<CloseButton onClick={onClose} />} />
        {left}
      </Left>
      <Right>{right}</Right>
      <LanguageSwitcher />
    </Container>
  )
}
