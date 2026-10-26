'use client'

import { useAppContext } from '@/components/AppContext'
import { useState } from 'react'
import styled from 'styled-components'

import picture from './oldest-stone-game-pic.webp'
import { HREF } from '@/utils/utils'
import {
  ExtraContent,
  Main,
  QuizPageLayout,
  QuizPageLayoutProps,
  Separator,
  Title as BaseTitle,
  Text,
  Footer,
  NextButton,
} from '@/layouts/QuizPageLayout'

const SmallTitle = styled(BaseTitle)({
  '& *': {
    fontSize: '60em',
  },
})

const BigTitle = styled(BaseTitle)({
  '& *': {
    fontSize: '90em',
  },
})

// re-mounted (via key) on every wrong answer, so it shakes each time
const Feedback = styled.div<{ $shake?: boolean }>(({ $shake }) => ({
  animation: $shake ? 'kiosk-shake 0.4s ease-in-out' : 'none', // defined in globals.css
}))

// positions of the highlighted stones on the picture; only the last one is the oldest
const WRONG_STONES = [
  { top: '8.5%', left: '13%', width: '19%' },
  { top: '65.4%', left: '12%', width: '18%' },
]
const OLDEST_STONE = { top: '40.4%', left: '68%', width: '19%' }
const STONE_HEIGHT = '4%'

// a stone that was tapped and is not the oldest: no longer pulsing, greyed out
const ruledOutStyle = {
  borderColor: 'rgba(255, 255, 255, 0.8)',
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  animation: 'none',
  pointerEvents: 'none' as const,
}

export type OldestStoneGameProps = {
  bgImg: QuizPageLayoutProps['bgImg']
  successTarget: HREF
  closeTarget: HREF
}

export default function OldestStoneGame({ bgImg, successTarget, closeTarget }: OldestStoneGameProps) {
  const dictionary = useAppContext().dictionary.games.oldestStone

  const [state, setState] = useState<keyof typeof dictionary>('start')
  const [wrongStones, setWrongStones] = useState<number[]>([])

  const text = dictionary[state]

  const TitleComponent = state === 'finish' ? BigTitle : SmallTitle

  const done = state === 'finish'

  return (
    <QuizPageLayout
      closeTarget={closeTarget}
      bgImg={bgImg}
      success={done}
      left={
        <>
          <Main>
            <Feedback key={wrongStones.length} $shake={state === 'incorrect'} aria-live="polite">
              <TitleComponent title={text.title} />
              <Separator />
              <Text>{text.body}</Text>
            </Feedback>
          </Main>
          {/* the way forward appears once the oldest stone is found; the close button still leaves the game */}
          {done && (
            <Footer>
              <NextButton target={successTarget} />
            </Footer>
          )}
        </>
      }
      right={
        <ExtraContent
          type="image"
          src={picture}
          alt="Oldest Stone Game"
          clickAreas={[
            ...WRONG_STONES.map((position, index) => ({
              style: {
                ...position,
                height: STONE_HEIGHT,
                display: done ? 'none' : 'block',
                borderColor: 'var(--highlight)',
                ...(wrongStones.includes(index) && ruledOutStyle),
              },
              onClick: () => {
                setWrongStones((previous) => (previous.includes(index) ? previous : [...previous, index]))
                setState('incorrect')
              },
            })),
            {
              style: {
                ...OLDEST_STONE,
                height: STONE_HEIGHT,
                ...(done
                  ? {
                      borderColor: 'var(--white)',
                      background: 'rgba(46, 125, 50, 0.6)',
                      animation: 'none',
                    }
                  : {
                      borderColor: 'var(--highlight)',
                    }),
              },
              onClick: () => setState('finish'),
            },
          ]}
        />
      }
      bgImgAlt="Oldest Stone Game"
    />
  )
}
