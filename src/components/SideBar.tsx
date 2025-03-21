'use client'

import { ComponentProps, useRef } from 'react'
import { CloseIcon, HamburgerIcon } from './Icons'
import { useClickAway } from './useClickAway'
import styled from 'styled-components'
import { IconButton } from './IconButton'
import { useAppContext } from './AppContext'

const Overlay = styled.div<{ $active: boolean }>((props) => ({
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

const Drawer = styled.div<{ $isExpanded: boolean }>((props) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',

  backgroundColor: 'var(--white)',
  transform: `translateX(${props.$isExpanded ? '0' : '-101%'})`,
  transition: 'transform 0.3s',

  padding: '10em 130em 10em 50em',
}))

type ButtonProps = ComponentProps<'button'>

const CloseButton = styled(({ children, ...otherProps }: ButtonProps) => (
  <button {...otherProps} title="close">
    <CloseIcon>{children}</CloseIcon>
  </button>
))({
  position: 'absolute',
  top: '35em',
  right: '35em',
  width: '45em',
  height: '45em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8em',
  border: 'none',
  borderRadius: '100%',
  backgroundColor: 'var(--highlight)',
  color: 'var(--white)',
  cursor: 'pointer',
})

export type SideBarButtonProps = {
  darkButton?: boolean
}

export function SideMenuButton({ darkButton }: SideBarButtonProps) {
  const { isSideBarExpanded, setSideBarExpanded } = useAppContext()
  const drawerRef = useRef<HTMLDivElement>(null)

  useClickAway(isSideBarExpanded, setSideBarExpanded, drawerRef)

  return (
    <IconButton onClick={() => setSideBarExpanded(true)} $dark={darkButton}>
      <HamburgerIcon color={darkButton ? 'var(--black)' : 'var(--white)'} />
    </IconButton>
  )
}

export type SideBarProps = {
  renderContent: () => JSX.Element
}

export function SideMenu({ renderContent }: SideBarProps) {
  const { isSideBarExpanded, setSideBarExpanded } = useAppContext()
  const drawerRef = useRef<HTMLDivElement>(null)

  useClickAway(isSideBarExpanded, setSideBarExpanded, drawerRef)

  return (
    <>
      <Overlay $active={isSideBarExpanded} />
      <Drawer $isExpanded={isSideBarExpanded} ref={drawerRef}>
        <CloseButton onClick={() => setSideBarExpanded(false)} />
        {renderContent()}
      </Drawer>
    </>
  )
}
