import { IconButton, IconButtonProps } from '@/components/IconButton'
import { NextArrowIcon } from '@/components/Icons'
import { useAppContext } from '@/context'
import { useState } from 'react'
import styled from 'styled-components'

import picture from './oldest-stone-game-pic.png'
import { useRouter } from 'next/navigation'
import { HREF, useHref } from '@/utils'
import {
  ExtraContent,
  Main,
  QuizPageLayout,
  QuizPageLayoutProps,
  Separator,
  Title as BaseTitle,
  Text,
  Footer,
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

export type OldestStoneGameParams = {
  bgImg: QuizPageLayoutProps['bgImg']
  successTarget: HREF
}

export type OldestStoneGameProps = OldestStoneGameParams & {
  onClose: () => void
}

export function OldestStoneGame({ bgImg, successTarget, onClose }: OldestStoneGameProps) {
  const successHref = useHref(successTarget)
  const { push } = useRouter()
  const dictionary = useAppContext().dictionary.games.oldestStone

  const [state, setState] = useState<keyof typeof dictionary>('start')

  const text = dictionary[state]

  const TitleComponent = state === 'finish' ? BigTitle : SmallTitle

  const done = state === 'finish'

  return (
    <QuizPageLayout
      onClose={onClose}
      bgImg={bgImg}
      left={
        <>
          <Main>
            <TitleComponent title={text.title} />
            <Separator />
            <Text>{text.body}</Text>
          </Main>
          {state && (
            <Footer>
              <NextButton
                onClick={() => {
                  onClose()
                  push(successHref.toString(), { scroll: false })
                }}
              />
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
            {
              style: {
                top: '8.5%',
                left: '13%',
                width: '19%',
                height: '4%',
                display: done ? 'none' : 'block',
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
              },
              onClick: () => setState('incorrect'),
            },

            {
              style: {
                top: '40.4%',
                left: '68%',
                width: '19%',
                height: '4%',
                ...(done && {
                  border: 'none',
                  background: 'rgba(71, 204, 64, 0.4)',
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
