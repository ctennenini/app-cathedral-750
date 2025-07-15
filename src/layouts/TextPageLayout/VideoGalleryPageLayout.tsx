import styled from 'styled-components'
import { PropsWithChildren } from 'react'
import { HomeButton } from '@/components/HomeButton'
import { NavMenuButton } from '@/components/NavMenu'
import { BackButton } from '@/components/BackButton'

const Container = styled.div`
  background-color: var(--white);
  padding: 64em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 48em;
  font-weight: bold;
  color: var(--black);
  text-align: center;
  margin-bottom: 64em;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64em;
`

export type VideoGalleryPageLayoutProps = PropsWithChildren<{
  title: string
  withHomeButton?: boolean
  backButtonTarget?: string
}>

export function VideoGalleryPageLayout({
  title,
  children,
  withHomeButton,
  backButtonTarget,
}: VideoGalleryPageLayoutProps) {
  return (
    <Container>
      <Header>
        <div style={{ display: 'flex', gap: '24em' }}>
          <NavMenuButton $dark />
          {withHomeButton && <HomeButton $dark />}
        </div>
        {backButtonTarget && <BackButton $dark href={backButtonTarget} />}
      </Header>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
