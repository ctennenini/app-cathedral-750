import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav({
  overflow: 'auto',
  height: '100%',
  padding: '170em 0 170em 0em',
})

export function NavContainer({ children }: PropsWithChildren<unknown>) {
  return <StyledNav>{children}</StyledNav>
}
