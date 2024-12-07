import { ComponentProps } from 'react'
import styled from 'styled-components'
import { CloseIcon } from '@/components/Icons'
import { Link } from '@/components/Links'

export const Button = styled.button({
  padding: '8px',
  fontSize: '16px',
  border: 'none',
  backgroundColor: 'transparent',
  color: '#333',
  cursor: 'pointer',
  '&:focus': {
    borderColor: '#007bff',
    outline: 'none',
  },
})

export const Drawer = styled.div<{ $isExpanded: boolean }>((props) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',

  backgroundColor: 'white',
  transform: `translateX(${props.$isExpanded ? '0' : '-100%'})`,
  transition: 'transform 0.3s',

  padding: '180px 130px 180px 50px',
}))

type ButtonProps = ComponentProps<'button'>

export const CloseButton = styled(({ children, ...otherProps }: ButtonProps) => (
  <button
    {...otherProps}
    title="close"
  >
    <CloseIcon>{children}</CloseIcon>
  </button>
))({
  position: 'absolute',
  top: '35px',
  right: '35px',
  width: '45px',
  height: '45px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '100%',
  backgroundColor: '#CE3D3A',
  color: 'white',
  cursor: 'pointer',
})

export const NavLink = styled(Link)({
  color: '#191919',
})
