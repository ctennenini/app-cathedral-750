'use client'

import { ComponentProps, useRef, useState } from 'react'
import { CloseIcon, HamburgerIcon } from './Icons'
import { useAppContext } from '@/context'
import { useClickAway } from './useClickAway'
import styled from 'styled-components'
import { IconButton } from './IconButton'

const Overlay = styled.div<{ $active: boolean }>(props => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  opacity: props.$active ? 1 : 0,
  pointerEvents: props.$active ? 'auto' : 'none',
  transition: 'opacity 0.3s',
}))

const Drawer = styled.div<{ $isExpanded: boolean }>(props => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',

  backgroundColor: 'var(--white)',
  transform: `translateX(${props.$isExpanded ? '0' : '-100%'})`,
  transition: 'transform 0.3s',

  padding: '180px 130px 180px 50px',
}))

type ButtonProps = ComponentProps<'button'>

const CloseButton = styled(({ children, ...otherProps }: ButtonProps) => (
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
  backgroundColor: 'var(--highlight)',
  color: 'var(--white)',
  cursor: 'pointer',
})

export type SideBarProps = {
  renderContent: () => JSX.Element
  darkButton?: boolean
}

export function SideBar({ renderContent, darkButton }: SideBarProps) {
  const [isExpanded, setExpanded] = useState(false)
  const { dictionary } = useAppContext()
  const drawerRef = useRef<HTMLDivElement>(null)

  useClickAway(isExpanded, setExpanded, drawerRef)

  return (
    <>
      <IconButton
        title={dictionary.start.actions.immersive}
        onClick={() => setExpanded(true)}
        $dark={darkButton}
      >
        <HamburgerIcon color={darkButton ? 'var(--black)' : 'var(--white)'} />
      </IconButton>
      <Overlay $active={isExpanded} />
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
