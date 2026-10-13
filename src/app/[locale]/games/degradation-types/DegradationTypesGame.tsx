'use client'

import { P } from '@/components/Typography'
import { useAppContext } from '@/components/AppContext'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

import schematicViewPicture from './schematic-view.png'
import windowPicture from './window-with-deterioration.png'
import { HREF } from '@/utils/utils'

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
    fontSize: '68em', // fits the longest word ("CONNAISSANCES") inside the panel
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
  fontSize: '30em',
  lineHeight: '1.4',
  marginBottom: '24em',
  fontStyle: 'italic',
  marginTop: '32em',
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
  transition: 'transform 0.1s, opacity 0.2s',
  span: {
    fontSize: '50em',
  },

  '&:active': {
    transform: 'scale(0.94)',
  },

  // an answer that was already tried and is wrong
  '&:disabled': {
    opacity: 0.35,
    cursor: 'default',
  },
})

const StartButton = styled.button({
  alignSelf: 'flex-start',
  minHeight: '100em',
  padding: '0 64em',
  border: 'none',
  borderRadius: '12em',
  backgroundColor: 'var(--white)',
  color: 'var(--black)',
  fontFamily: 'var(--font-buttons)',
  cursor: 'pointer',
  transition: 'transform 0.1s',

  span: {
    fontSize: '32em',
  },

  '&:active': {
    transform: 'scale(0.96)',
  },
})

// re-mounted (via key) on every wrong answer, so it shakes each time
const Feedback = styled.div<{ $shake?: boolean }>(({ $shake }) => ({
  animation: $shake ? 'kiosk-shake 0.4s ease-in-out' : 'none', // defined in globals.css
}))

type State = 'START' | 'IN_PROGRESS' | 'WRONG_ANSWER' | 'FINISH'

const ANSWERS = [1, 2, 3]
const CORRECT_ANSWER = 3

type StateComponentProps = Omit<QuizPageLayoutProps, 'left' | 'right'> & {
  setState: (state: State) => void
  successTarget: HREF
  wrongAnswers: number[]
  onAnswer: (answer: number) => void
}

function Start({ setState, ...otherProps }: StateComponentProps) {
  const { title, body, startButton } = useAppContext().dictionary.games.degradationTypes.start

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
            <StartButton onClick={() => setState('IN_PROGRESS')}>
              <span>{startButton}</span>
            </StartButton>
          </Footer>
        </>
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

function MidGame({
  setState,
  title,
  explanation,
  hint,
  wrongAnswers,
  onAnswer,
  ...otherProps
}: StateComponentProps & { title: ReactNode; explanation?: string; hint?: string }) {
  return (
    <QuizPageLayout
      left={
        <Main>
          <Feedback key={wrongAnswers.length} $shake={wrongAnswers.length > 0} aria-live="polite">
            {title}
            {explanation && <Text>{explanation}</Text>}
          </Feedback>
          <Separator />
          <Buttons>
            {ANSWERS.map((answer) => (
              <Button key={answer} onClick={() => onAnswer(answer)} disabled={wrongAnswers.includes(answer)}>
                <span>{answer}</span>
              </Button>
            ))}
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
  return (
    <MidGame {...props} title={<BigTitle title={incorrect.title} />} explanation={incorrect.body} hint={main.hint} />
  )
}

function Finish({ successTarget, ...otherProps }: StateComponentProps) {
  const { title, body } = useAppContext().dictionary.games.degradationTypes.finish

  return (
    <QuizPageLayout
      success
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
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([])

  const onAnswer = (answer: number) => {
    if (answer === CORRECT_ANSWER) {
      setState('FINISH')
    } else {
      setWrongAnswers((previous) => [...previous, answer])
      setState('WRONG_ANSWER')
    }
  }

  const Component = getComponent(state)

  return <Component setState={setState} wrongAnswers={wrongAnswers} onAnswer={onAnswer} {...props} />
}
