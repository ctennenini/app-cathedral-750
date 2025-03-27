'use client'

import { BaseContainer } from '@/layouts/shared/BaseLayout.components'
import bgImg from '@/assets/bg-images/interior-dark-round-window.png'
import { H1 } from '@/components/Typography'
import styled from 'styled-components'
import { BackArrowIcon, HomeIcon } from '@/components/Icons'
import Link from 'next/link'

const Container = styled(BaseContainer)({
  '&&': {
    padding: '12em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Main = styled.main({
  maxWidth: '90em',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '3em',
  borderRadius: '3em',
})

const Title = styled(H1)({
  fontSize: '4em',
  textAlign: 'center',
  lineHeight: '1.2',
})

const Separator = styled.hr({
  borderColor: 'var(--separator-light)',
  margin: '3em 6em',
})

const Actions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '2em',
})

const iconStyle = {
  border: 'none',
  backgroundColor: 'var(--white)',
  color: 'var(--highlight)',
  width: '5em',
  height: '5em',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
  '&:focus': {
    borderColor: 'var(--highlight)',
    outline: 'none',
  },
}

const IconLink = styled(Link)(iconStyle)
const IconButton = styled('button')(iconStyle)

export default function Custom404() {
  return (
    <Container bgImg={bgImg} bgImgAlt="interior of the cathedral">
      <Main>
        <Title>Unknown Route / Unbekannte Route / Route inconnue / Rotta sconosciuta</Title>
        <Separator />
        <Actions>
          <IconButton onClick={() => window.history.back()} title="Back">
            <BackArrowIcon width="3em" height="3em" />
          </IconButton>
          <IconLink href="/" title="Home" scroll={false}>
            <HomeIcon width="3em" height="3em" />
          </IconLink>
        </Actions>
      </Main>
    </Container>
  )
}
