'use client'

import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { BigLink, BigLinkProps } from '@/components/Links'

export {
  Container,
  LanguageSwitcher,
  Left,
  Right,
  Header,
  Footer,
  Main,
  Title,
  Separator,
  Text,
} from '../components/ColumnLayout.components'

const LinksContainer = styled.nav({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10rem 2rem 10rem 4rem',
  maxWidth: 'calc(725px + 2rem)',

  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    justifyContent: 'center',
    listStyle: 'none',
    [BigLink]: {
      width: '100%',
    },
  },
})

export type LinksProps = PropsWithChildren<{
  links?: BigLinkProps[]
}>

export function Links({ links }: LinksProps) {
  return (
    <>
      {links && (
        <LinksContainer>
          <ul>
            {links.map((props, i) => (
              <li key={i}>
                <BigLink {...props} />
              </li>
            ))}
          </ul>
        </LinksContainer>
      )}
    </>
  )
}
