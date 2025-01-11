import { IconButton, IconButtonProps } from '@/components/IconButton'
import { NextArrowIcon } from '@/components/Icons'
import { H1, P } from '@/components/Typography'
import { useAppContext } from '@/context'
import { useState } from 'react'
import styled from 'styled-components'

import picture from './oldest-stone-game-pic.png'
import { useRouter } from 'next/navigation'
import { HREF, useHref } from '@/utils'
import { ExtraContent, Main, QuizPageLayout, QuizPageLayoutProps } from '@/layouts/QuizPageLayout'
import { Separator } from '@/layouts/components/ColumnLayout.components'

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

// const Trigger = styled.button<{ $green?: boolean }>(({ $green }) => ({
//   position: 'absolute',
//   backgroundColor: 'transparent',
//   border: '4px dotted',
//   borderColor: $green ? '#47CC40' : 'var(--highlight)',
//   cursor: 'pointer',
// }))

// const Trigger1 = styled(Trigger)({
//   top: '6.1rem',
//   left: '6rem',
//   width: '6rem',
//   height: '2rem',
// })

// const Trigger2 = styled(Trigger)({
//   top: '44.6rem',
//   left: '5rem',
//   width: '7rem',
//   height: '2rem',
// })

// const Trigger3 = styled(Trigger)({
//   top: '27.7rem',
//   left: '27.5rem',
//   width: '7rem',
//   height: '2rem',
// })

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
              coords: '0,0,100,100',
              onClick: () => setIsDone(true),
            },
          ]}
        />
      }
      bgImgAlt="Oldest Stone Game"
    />
    // <Container
    //   blurBackground
    //   bgImg={bgImg}
    //   bgImgAlt="Oldest Stone Game"
    // >
    //   <Content>
    //     <CloseButton onClick={onClose} />
    //     <Left>
    //       <Title>{text.title}</Title>
    //       <Separator />
    //       <Body>{text.body}</Body>
    //       {isDone && (
    //         <NextButton
    //           onClick={() => {
    //             onClose()
    //             push(successHref.toString(), { scroll: false })
    //           }}
    //         />
    //       )}
    //     </Left>
    //     <Right>
    //       <Image
    //         src={picture}
    //         alt="Oldest Stone Game"
    //       />
    //       {isDone ? (
    //         <Trigger3 $green />
    //       ) : (
    //         <>
    //           <Trigger1 />
    //           <Trigger2 />
    //           <Trigger3 onClick={() => setIsDone(true)} />
    //         </>
    //       )}
    //     </Right>
    //   </Content>
    // </Container>
  )
}
