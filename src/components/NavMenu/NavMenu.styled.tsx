'use client'
import styled from 'styled-components'
import { Link } from '@/components/Links'
import { NavMenuTriangleClosed } from '../Icons'

export const Nav = styled.nav({
  lineHeight: '34px',
})


export const List = styled.ul({
  listStyle: 'none',

  'li &': {
    marginLeft: '1.4rem',
  }
})



export const TriangleClosed = styled(NavMenuTriangleClosed)({
  position: 'absolute',
  right: '100%',
  top: '50%',
  transform: 'translate(-1rem, -50%)',
  cursor: 'pointer',
})

