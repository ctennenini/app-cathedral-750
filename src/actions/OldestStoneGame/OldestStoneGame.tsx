import { IconButton, IconButtonProps } from '@/components/IconButton'
import { NextArrowIcon } from '@/components/Icons'
import { H1, P } from '@/components/Typography'
import { useAppContext } from '@/context'
import { useState } from 'react'
import styled from 'styled-components'

import picture from './oldest-stone-game-pic.png'
import { useRouter } from 'next/navigation'
import { HREF, useHref } from '@/utils'
import { ExtraContent, Main, QuizPageLayout, QuizPageLayoutProps, Separator } from '@/layouts/QuizPageLayout'

const Title = styled(H1)({
  fontSize: '4rem',
  lineHeight: '4.5rem',
  fontWeight: 700,
})

const Body = styled(P)({
  fontSize: '1.8rem',
  lineHeight: '2rem',
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
  const { dictionary } = useAppContext()

  const [isDone, setIsDone] = useState(false)

  const text = isDone ? dictionary.games.oldestStone.finish : dictionary.games.oldestStone.start

  return (
    <QuizPageLayout
      onClose={onClose}
      bgImg={bgImg}
      left={
        <Main>
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
        </Main>
      }
      right={
        <ExtraContent
          type="image-with-click-map"
          src={picture}
          alt="Oldest Stone Game"
          clickAreas={[
            {
              style: {
                top: '8.5%',
                left: '13%',
                width: '19%',
                height: '4%',
              },
            },

            {
              style: {
                top: '65.4%',
                left: '12%',
                width: '18%',
                height: '4%',
              },
            },

            {
              style: {
                top: '40.4%',
                left: '68%',
                width: '19%',
                height: '4%',
              },
              onClick: () => setIsDone(true),
            },
          ]}
        />
      }
      bgImgAlt="Oldest Stone Game"
    />
  )
}
