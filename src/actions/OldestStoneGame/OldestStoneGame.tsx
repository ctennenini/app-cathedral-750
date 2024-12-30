import { IconButton, IconButtonProps } from '@/components/IconButton'
import { CloseIcon, NextArrowIcon } from '@/components/Icons'
import { H1, P } from '@/components/Typography'
import { useAppContext } from '@/context'
import { BaseContainer, BaseContainerProps } from '@/layouts/BaseContainer'
import { useState } from 'react'
import styled from 'styled-components'

import Image from 'next/image'

import picture from './oldest-stone-game-pic.png'
import { useRouter } from 'next/navigation'
import { useHref } from '@/utils'

const Container = styled(BaseContainer)({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 100,

  padding: '0 2rem',
})

const Overlay = styled.div({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(16px)',
})

const Content = styled.article({
  position: 'relative',

  width: '100%',
  maxWidth: '90rem',
  height: '100%',
  margin: '0 auto',

  fontSize: '2rem',

  display: 'flex',
  flexDirection: 'row',
})

const CloseButton = styled((props: IconButtonProps) => (
  <IconButton {...props}>
    <CloseIcon />
  </IconButton>
))({
  position: 'absolute',
  top: '3rem',
  left: '3rem',
  color: '#CE3D3A',
  backgroundColor: 'white',
})

const Left = styled.div({
  padding: '7rem 6rem',
  color: '#fff',
  backgroundColor: '#CE3D3A',
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
  '&::after': {
    content: '""',
    flexGrow: '0.25',
  },
})

const Title = styled(H1)({
  fontSize: '4rem',
  lineHeight: '4.5rem',
  fontWeight: 700,
})

const Body = styled(P)({
  fontSize: '1.8rem',
  lineHeight: '2rem',
})

const Separator = styled.hr({
  width: '100%',
  height: 1,
  backgroundColor: '#fff',
})

const NextButton = styled((props: IconButtonProps) => (
  <IconButton {...props}>
    <NextArrowIcon />
  </IconButton>
))({
  backgroundColor: 'white',
  color: '#CE3D3A',
  width: '87px',
  height: '87px',
  flexShrink: 0,
  flexGrow: 0,
  alignSelf: 'flex-end',
})

const Right = styled.div({
  position: 'relative',
})

const Trigger = styled.button({
  position: 'absolute',
  top: ' 27.3rem',
  left: '27rem',
  width: '8rem',
  height: '3rem',
  // backgroundColor: '#CE3D3Aaa',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
})

export type OldestStoneGameParams = {
  bgImg: BaseContainerProps['bgImg']
  successTarget: string
}

export type OldestStoneGameProps = OldestStoneGameParams & {
  onClose: () => void
}

export function OldestStoneGame({ bgImg, successTarget, onClose }: OldestStoneGameProps) {
  const successHref = useHref(successTarget)
  const { push } = useRouter()
  const { dictionary } = useAppContext()

  const [isDone, setIsDone] = useState(false)

  const text = isDone ? dictionary.games.oldestStone.finish : dictionary.games.oldestStone.start

  return (
    <Container
      bgImg={bgImg}
      bgImgAlt="Oldest Stone Game"
    >
      <Overlay />
      <Content>
        <CloseButton onClick={onClose} />
        <Left>
          <Title>{text.title}</Title>
          <Separator />
          <Body>{text.body}</Body>
          {isDone && (
            <NextButton
              onClick={() => {
                onClose()
                push(successHref.toString())
              }}
            />
          )}
        </Left>
        <Right>
          <Image
            src={picture}
            alt="Oldest Stone Game"
          />
          <Trigger onClick={() => setIsDone(true)} />
        </Right>
      </Content>
    </Container>
  )
}
