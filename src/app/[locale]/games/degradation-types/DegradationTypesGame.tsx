'use client'

import { P } from '@/components/Typography'
import { useAppContext } from '@/components/AppContext'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

import schematicViewPicture from './schematic-view.png'
import windowPicture from './window-with-deterioration.png'
import { HREF } from '@/utils'

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
    fontSize: '80em',
    color: 'var(--white)',
  },
})

const SmallTitle = styled(Title)({
  '& *': {
    fontSize: '58em',
    color: 'var(--white)',
  },
})

const Hint = styled(P)({
  fontSize: '1.6em',
  lineHeight: '2em',
  fontStyle: 'italic',
  marginTop: 'auto',
})

const Buttons = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16em',
  marginTop: '40em',
})

const Button = styled.button({
  backgroundColor: 'var(--white)',
  border: '1em solid var(--white)',
  color: 'var(--highlight)',
  cursor: 'pointer',
  width: '130em',
  height: '130em',
  borderRadius: '100em',
  span: {
    fontSize: '50em',
  },
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
            <Button onClick={() => setState('WRONG_ANSWER')}>
              <span>1</span>
            </Button>
            <Button onClick={() => setState('WRONG_ANSWER')}>
              <span>2</span>
            </Button>
            <Button onClick={() => setState('FINISH')}>
              <span>3</span>
            </Button>
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
            <NextButton data-testid="next-button" target={successTarget} />
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
