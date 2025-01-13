'use client'

import { BaseContainer } from '@/layouts/shared/BaseLayout.components'
import bgImg from '@/assets/bg-images/interior-dark-round-window.png'
import { H1 } from '@/components/Typography'
import styled from 'styled-components'
import { BackArrowIcon, HomeIcon } from '@/components/Icons'
import Link from 'next/link'

const Container = styled(BaseContainer)({
  '&&': {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  },
})

const Main = styled.main({
  maxWidth: '90rem',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '3rem',
  borderRadius: '3rem',
})

const Title = styled(H1)({
  fontSize: '4rem',
  textAlign: 'center',
  lineHeight: '1.2',
})

const Separator = styled.hr({
  borderColor: 'var(--separator-light)',
  margin: '3rem 6rem',
})

const Actions = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '2rem',
})

const iconStyle = {
  border: 'none',
  backgroundColor: 'var(--white)',
  color: 'var(--highlight)',
  width: '80px',
  height: '80px',
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
    <Container
      bgImg={bgImg}
      bgImgAlt="interior of the cathedral"
    >
      <Main>
        <Title>Unknown Route / Unbekannte Route / Route inconnue / Rotta sconosciuta</Title>
        <Separator />
        <Actions>
          <IconButton
            onClick={() => window.history.back()}
            title="Back"
          >
            <BackArrowIcon
              width="50%"
              height="50%"
            />
          </IconButton>
          <IconLink
            href="/"
            title="Home"
            scroll={false}
          >
            <HomeIcon
              width="50%"
              height="50%"
            />
          </IconLink>
        </Actions>
      </Main>
    </Container>
  )
}
