'use client'

import { P } from '@/components/Typography'
import { useAppContext } from '@/context'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

import schematicViewPicture from './schematic-view.png'
import windowPicture from './window-with-deterioration.png'
import { useHref, HREF } from '@/utils'

import {
  ExtraContent,
  QuizPageLayout,
  QuizPageLayoutProps,
  Main,
  Separator,
  Text,
  Title,
  NextButton,
} from '@/layouts/QuizPageLayout'
import { Footer } from '@/layouts/shared/ColumnLayout.components'

const BigTitle = styled(Title)({
  '& *': {
    fontSize: '5rem',
    color: 'var(--white)',
  },
})

const SmallTitle = styled(Title)({
  '& *': {
    fontSize: '3.6rem',
    color: 'var(--white)',
  },
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
  marginTop: '2.5rem',
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

type State = 'START' | 'IN_PROGRESS' | 'WRONG_ANSWER' | 'FINISH'

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
          <BigTitle title={title} />
          <Separator />
          <Text>{body}</Text>
        </Main>
      }
      right={
        <ExtraContent
          type="image"
          src={schematicViewPicture}
          clickAreas={[
            {
              onClick: () => setState('IN_PROGRESS'),
              style: {
                top: '80.7%',
                left: '18.9%',
                width: '12%',
                opacity: '0.5',
                aspectRatio: '1 / 1',
                borderRadius: '100%',
              },
            },
          ]}
        />
      }
      {...otherProps}
    />
  )
}

function MidGame({ setState, title, hint, ...otherProps }: StateComponentProps & { title: ReactNode; hint?: string }) {
  return (
    <QuizPageLayout
      left={
        <Main>
          {title}
          <Separator />
          <Buttons>
            <Button onClick={() => setState('WRONG_ANSWER')}>1</Button>
            <Button onClick={() => setState('WRONG_ANSWER')}>2</Button>
            <Button onClick={() => setState('FINISH')}>3</Button>
          </Buttons>
          {hint && <Hint>{hint}</Hint>}
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

function InProgress(props: StateComponentProps) {
  const { title, hint } = useAppContext().dictionary.games.degradationTypes.main
  return <MidGame {...props} title={<SmallTitle title={title} />} hint={hint} />
}

function WrongAnswer(props: StateComponentProps) {
  const { incorrect, main } = useAppContext().dictionary.games.degradationTypes
  return <MidGame {...props} title={<BigTitle title={incorrect.title} />} hint={main.hint} />
}

function Finish({ successTarget, ...otherProps }: StateComponentProps) {
  const successHref = useHref(successTarget)
  const { title, body } = useAppContext().dictionary.games.degradationTypes.finish

  return (
    <QuizPageLayout
      left={
        <>
          <Main>
            <BigTitle title={title} />
            <Separator />
            <Text>{body}</Text>
          </Main>
          <Footer>
            <NextButton data-testid="next-button" target={successHref} />
          </Footer>
        </>
      }
      right={<ExtraContent type="image" src={windowPicture} alt="Degradation Types Game" />}
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
    case 'WRONG_ANSWER':
      return WrongAnswer
    case 'FINISH':
      return Finish
    default:
      throw new Error('Invalid state:', state)
  }
}

export type DegradationTypesGameProps = Pick<StateComponentProps, 'bgImg' | 'successTarget' | 'closeTarget'>

export function DegradationTypesGame(props: DegradationTypesGameProps) {
  const [state, setState] = useState<State>('START')

  const Component = getComponent(state)

  return <Component setState={setState} {...props} />
}
