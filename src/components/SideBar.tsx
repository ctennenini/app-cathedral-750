'use client'

import { ComponentProps, useRef, useState } from 'react'
import { CloseIcon, HamburgerIcon } from './Icons'
import { useAppContext } from '@/context'
import { useClickAway } from './useClickAway'
import styled from 'styled-components'

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

export const Drawer = styled.div<{ $isExpanded: boolean }>(props => ({
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

export type SideBarProps = {
  renderContent: () => JSX.Element
}

export function SideBar({ renderContent }: SideBarProps) {
  const [isExpanded, setExpanded] = useState(false)
  const { dictionary } = useAppContext()
  const drawerRef = useRef<HTMLDivElement>(null)

  useClickAway(isExpanded, setExpanded, drawerRef)

  return (
    <>
      <Button
        title={dictionary.start.actions.immersive}
        onClick={() => setExpanded(true)}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        $isExpanded={isExpanded}
        ref={drawerRef}
      >
        <CloseButton onClick={() => setExpanded(false)} />
        {renderContent()}
      </Drawer>
    </>
  )
}
