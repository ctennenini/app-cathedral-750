'use client'

import { useAppContext } from '@/context'
import { useState } from 'react'
import styled from 'styled-components'

import picture from './oldest-stone-game-pic.png'
import { HREF } from '@/utils'
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
    fontSize: '3.8rem',
  },
})

const BigTitle = styled(BaseTitle)({
  '& *': {
    fontSize: '5.4rem',
  },
})

export type OldestStoneGameProps = {
  bgImg: QuizPageLayoutProps['bgImg']
  successTarget: HREF
  closeTarget: HREF
}

export default function OldestStoneGame({ bgImg, successTarget, closeTarget }: OldestStoneGameProps) {
  const dictionary = useAppContext().dictionary.games.oldestStone

  const [state, setState] = useState<keyof typeof dictionary>('start')

  const text = dictionary[state]

  const TitleComponent = state === 'finish' ? BigTitle : SmallTitle

  const done = state === 'finish'

  return (
    <QuizPageLayout
      closeTarget={closeTarget}
      bgImg={bgImg}
      left={
        <>
          <Main>
            <TitleComponent title={text.title} />
            <Separator />
            <Text>{text.body}</Text>
          </Main>
          <Footer>
            <NextButton target={successTarget} />
          </Footer>
        </>
      }
      right={
        <ExtraContent
          type="image"
          src={picture}
          alt="Oldest Stone Game"
          clickAreas={[
            {
              style: {
                top: '8.5%',
                left: '13%',
                width: '19%',
                height: '4%',
                display: done ? 'none' : 'block',
                borderColor: 'var(--highlight)',
              },
              onClick: () => setState('incorrect'),
            },

            {
              style: {
                top: '65.4%',
                left: '12%',
                width: '18%',
                height: '4%',
                display: done ? 'none' : 'block',
                borderColor: 'var(--highlight)',
              },
              onClick: () => setState('incorrect'),
            },

            {
              style: {
                top: '40.4%',
                left: '68%',
                width: '19%',
                height: '4%',
                ...(done
                  ? {
                      background: 'rgba(71, 204, 64, 0.4)',
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
