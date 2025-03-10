import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav({
  overflow: 'auto',
  height: '100%',
  padding: '170px 0 170px 0px',
})

export function NavContainer({ children }: PropsWithChildren<unknown>) {
  return <StyledNav>{children}</StyledNav>
}
