import { IconButton, IconButtonProps } from '@/components/IconButton'
import { CloseIcon, NextArrowIcon } from '@/components/Icons'
import { H1, P } from '@/components/Typography'
import { useAppContext } from '@/context'
import { BaseContainer, BaseContainerProps } from '@/layouts/BaseContainer'
import { useState } from 'react'
import styled from 'styled-components'

import Image from 'next/image'

import schematicViewPicture from './schematic-view.png'
import windowPicture from './window-with-deterioration.png'
import { useRouter } from 'next/navigation'
import { useHref, HREF } from '@/utils'

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

const Hint = styled(P)({
  fontSize: '1.6rem',
  lineHeight: '2rem',
  fontStyle: 'italic',
})

const Right = styled.div({
  position: 'relative',
  alignSelf: 'center',
})

const Buttons = styled.div({
  display: 'flex',
  gap: '1rem',
})

const Button = styled.button({
  backgroundColor: 'transparent',
  border: '1px solid var(--white)',
  color: 'var(--white)',
  fontSize: '1.6rem',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
})

type State = 'START' | 'MAIN' | 'FINISH'

function Start({ setState }: { setState: (state: State) => void }) {
  const { dictionary } = useAppContext()
  const { title, body } = dictionary.games.degradationTypes.start
  return (
    <>
      <Left>
        <Title>{title}</Title>
        <Separator />
        <Body>{body}</Body>
      </Left>
      <Right>
        <Image
          src={schematicViewPicture}
          alt="Degradation Types Game"
          onClick={() => setState('MAIN')}
        />
      </Right>
    </>
  )
}

function Main({ setState }: { setState: (state: State) => void }) {
  const { dictionary } = useAppContext()
  const { title, hint } = dictionary.games.degradationTypes.main
  return (
    <>
      <Left>
        <Title>{title}</Title>
        <Separator />
        <Buttons>
          <Button>1</Button>
          <Button onClick={() => setState('FINISH')}>2</Button>
          <Button>3</Button>
        </Buttons>
        <Hint>{hint}</Hint>
      </Left>
      <Right>
        <Image
          src={windowPicture}
          alt="Oldest Stone Game"
        />
      </Right>
    </>
  )
}

function Finish({ successHref }: { successHref: HREF }) {
  const { push } = useRouter()
  const { dictionary } = useAppContext()
  const { title, body } = dictionary.games.degradationTypes.finish
  return (
    <>
      <Left>
        <Left>
          <Title>{title}</Title>
          <Separator />
          <Body>{body}</Body>
          <NextButton
            onClick={() => {
              push(successHref.toString(), { scroll: false })
            }}
          />
        </Left>
      </Left>
      <Right>
        <Image
          src={windowPicture}
          alt="Oldest Stone Game"
        />
      </Right>
    </>
  )
}

export type DegradationTypesGameParams = {
  bgImg: BaseContainerProps['bgImg']
  successTarget: string
}

export type DegradationTypesGameProps = DegradationTypesGameParams & {
  onClose: () => void
}

export function DegradationTypesGame({ bgImg, successTarget, onClose }: DegradationTypesGameProps) {
  const successHref = useHref(successTarget)
  const [state, setState] = useState<State>('START')

  return (
    <Container
      blurBackground
      bgImg={bgImg}
      bgImgAlt="Degradation Types Game"
    >
      <Content>
        <CloseButton onClick={onClose} />
        {state === 'START' && <Start setState={setState} />}
        {state === 'MAIN' && <Main setState={setState} />}
        {state === 'FINISH' && <Finish successHref={successHref} />}
        <Start setState={setState} />
      </Content>
    </Container>
  )
}
