'use client'

import { useAppContext } from '@/context'
import { useState } from 'react'

import picture from './map-of-switzerland-with-overlay.png'
import { HREF } from '@/utils'
import {
  ExtraContent,
  Main,
  QuizPageLayout,
  QuizPageLayoutProps,
  Separator,
  Title,
  Text,
} from '@/layouts/QuizPageLayout'

const dotStyle: React.CSSProperties = {
  width: '2.5%',
  aspectRatio: '1 / 1',
  borderRadius: '50%',
}

export type QuarriesGameProps = {
  bgImg: QuizPageLayoutProps['bgImg']
  closeTarget: HREF
}

export default function QuarriesGame({ bgImg, closeTarget }: QuarriesGameProps) {
  const dictionary = useAppContext().dictionary.games.quarries

  type State = keyof typeof dictionary

  const [state, setState] = useState<State>('start')

  const bg = (activeState: State) => (state === 'start' || state === activeState ? 'var(--highlight)' : '#605A5A')

  const text = dictionary[state]

  return (
    <QuizPageLayout
      closeTarget={closeTarget}
      bgImg={bgImg}
      left={
        <Main>
          <Title title={text.title} />
          <Separator />
          <Text>{text.body}</Text>
        </Main>
      }
      right={
        <ExtraContent
          type="image"
          src={picture}
          alt="Oldest Stone Game"
          clickAreas={[
            {
              style: {
                ...dotStyle,
                top: '59%',
                left: '16%',
                backgroundColor: bg('quarry1'),
              },
              $circled: state === 'quarry1',
              onClick: () => setState('quarry1'),
            },

            {
              style: {
                ...dotStyle,
                top: '46%',
                left: '26%',
                backgroundColor: bg('quarry2'),
              },
              $circled: state === 'quarry2',
              onClick: () => setState('quarry2'),
            },

            {
              style: {
                ...dotStyle,
                top: '23%',
                left: '53.7%',
                backgroundColor: bg('quarry3'),
              },
              $circled: state === 'quarry3',
              onClick: () => setState('quarry3'),
            },
          ]}
        />
      }
      bgImgAlt="Oldest Stone Game"
    />
  )
}
