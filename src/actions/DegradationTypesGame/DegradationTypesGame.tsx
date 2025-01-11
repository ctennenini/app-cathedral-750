import { IconButton, IconButtonProps } from '@/components/IconButton'
import { NextArrowIcon } from '@/components/Icons'
import { H1, P } from '@/components/Typography'
import { useAppContext } from '@/context'
import { useState } from 'react'
import styled from 'styled-components'

import schematicViewPicture from './schematic-view.png'
import windowPicture from './window-with-deterioration.png'
import { useRouter } from 'next/navigation'
import { useHref, HREF } from '@/utils'

import { ExtraContent, QuizPageLayout, QuizPageLayoutProps, Main } from '@/layouts/QuizPageLayout'

const Title = styled(H1)({
  fontSize: '5rem',
  lineHeight: '5.5rem',
  fontWeight: 700,
})

const SmallerTitle = styled(H1)({
  fontSize: '3.8rem',
  lineHeight: '4.5rem',
})

const Body = styled(P)({
  fontSize: '1.8rem',
  lineHeight: '2rem',
})

const Separator = styled.hr({
  width: '100%',
  height: 1,
  backgroundColor: 'var(--separator-light)',
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
  marginTop: 'auto',
})

const Buttons = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
})

const Button = styled.button({
  backgroundColor: 'var(--white)',
  border: '1px solid var(--white)',
  color: 'var(--highlight)',
  fontSize: '3rem',
  cursor: 'pointer',

  width: '10rem',
  height: '10rem',
  borderRadius: '10rem',
})

type State = 'START' | 'IN_PROGRESS' | 'FINISH'

type StateComponentProps = Omit<QuizPageLayoutProps, 'left' | 'right'> & {
  setState: (state: State) => void
  successTarget: HREF
}

function Start({ setState, ...otherProps }: StateComponentProps) {
  const { title, body } = useAppContext().dictionary.games.degradationTypes.start

  return (
    <QuizPageLayout
      left={
        <Main>
          <Title>{title}</Title>
          <Separator />
          <Body>{body}</Body>
        </Main>
      }
      right={
        <ExtraContent
          type="image"
          src={schematicViewPicture}
          alt="Degradation Types Game"
          onClick={() => setState('IN_PROGRESS')}
        />
      }
      {...otherProps}
    />
  )
}

function InProgress({ setState, ...otherProps }: StateComponentProps) {
  const { title, hint } = useAppContext().dictionary.games.degradationTypes.main
  return (
    <QuizPageLayout
      left={
        <Main>
          <SmallerTitle>{title}</SmallerTitle>
          <Separator />
          <Buttons>
            <Button>1</Button>
            <Button onClick={() => setState('FINISH')}>2</Button>
            <Button>3</Button>
          </Buttons>
          <Hint>{hint}</Hint>
        </Main>
      }
      right={
        <ExtraContent
          type="image"
          src={windowPicture}
          alt="Degradation Types Game"
          onClick={() => setState('IN_PROGRESS')}
        />
      }
      {...otherProps}
    />
  )
}

function Finish({ successTarget, ...otherProps }: StateComponentProps) {
  const successHref = useHref(successTarget)
  const { title, body } = useAppContext().dictionary.games.degradationTypes.finish
  const { push } = useRouter()

  console.log({ successHref })

  return (
    <QuizPageLayout
      left={
        <Main>
          <Title>{title}</Title>
          <Separator />
          <Body>{body}</Body>
          <NextButton
            onClick={() => {
              if (typeof successHref === 'string') {
                push(successHref, { scroll: false })
              } else {
                otherProps.onClose?.()
              }
            }}
          />
        </Main>
      }
      right={
        <ExtraContent
          type="image"
          src={windowPicture}
          alt="Degradation Types Game"
        />
      }
      {...otherProps}
    />
  )
}

function getComponent(state: State) {
  switch (state) {
    case 'START':
      return Start
    case 'IN_PROGRESS':
      return InProgress
    case 'FINISH':
      return Finish
    default:
      throw new Error('Invalid state:', state)
  }
}

export type DegradationTypesGameParams = {
  bgImg: QuizPageLayoutProps['bgImg']
  successTarget: StateComponentProps['successTarget']
}

export type DegradationTypesGameProps = DegradationTypesGameParams & {
  onClose: () => void
}

export function DegradationTypesGame({ bgImg, successTarget, onClose }: DegradationTypesGameProps) {
  const [state, setState] = useState<State>('START')

  const Component = getComponent(state)

  return (
    <Component
      bgImg={bgImg}
      setState={setState}
      successTarget={successTarget}
      onClose={onClose}
    />
  )
}
