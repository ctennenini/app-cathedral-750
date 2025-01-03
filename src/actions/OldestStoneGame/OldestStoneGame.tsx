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
  '&&': {
    zIndex: 100,
    padding: '0 2rem',
  },
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
  color: 'var(--highlight)',
  backgroundColor: 'var(--white)',
})

const Left = styled.div({
  padding: '7rem 6rem',
  color: 'var(--white)',
  backgroundColor: 'var(--highlight)',
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
  backgroundColor: 'var(--white)',
})

const NextButton = styled((props: IconButtonProps) => (
  <IconButton {...props}>
    <NextArrowIcon />
  </IconButton>
))({
  backgroundColor: 'var(--white)',
  color: 'var(--highlight)',
  width: '87px',
  height: '87px',
  flexShrink: 0,
  flexGrow: 0,
  alignSelf: 'flex-end',
})

const Right = styled.div({
  position: 'relative',
  alignSelf: 'center',
})

const Trigger = styled.button<{ $green?: boolean }>(({ $green }) => ({
  position: 'absolute',
  backgroundColor: 'transparent',
  border: '4px dotted',
  borderColor: $green ? '#47CC40' : 'var(--highlight)',
  cursor: 'pointer',
}))

const Trigger1 = styled(Trigger)({
  top: '6.1rem',
  left: '6rem',
  width: '6rem',
  height: '2rem',
})

const Trigger2 = styled(Trigger)({
  top: '44.6rem',
  left: '5rem',
  width: '7rem',
  height: '2rem',
})

const Trigger3 = styled(Trigger)({
  top: '27.7rem',
  left: '27.5rem',
  width: '7rem',
  height: '2rem',
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
      blurBackground
      bgImg={bgImg}
      bgImgAlt="Oldest Stone Game"
    >
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
                push(successHref.toString(), { scroll: false })
              }}
            />
          )}
        </Left>
        <Right>
          <Image
            src={picture}
            alt="Oldest Stone Game"
          />
          {isDone ? (
            <Trigger3 $green />
          ) : (
            <>
              <Trigger1 />
              <Trigger2 />
              <Trigger3 onClick={() => setIsDone(true)} />
            </>
          )}
        </Right>
      </Content>
    </Container>
  )
}
