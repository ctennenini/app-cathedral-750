'use client'
import styled from 'styled-components'
import { Link } from '@/components/Links'
import { NavMenuTriangleClosed } from '../Icons'
import { useState } from 'react'


const NavLink = styled(Link)({
  color: '#191919',
})



const TriangleClosed = styled(NavMenuTriangleClosed)({
  // position: 'absolute',
  // right: '100%',
  // top: '50%',
  // transform: 'translate(-1rem, -50%)',
})

const Li = styled.li<{ $hasChilden: boolean, isExpanded?: boolean }>((props) => ({
  position: 'relative',
  display: 'flex',
  // '&::before': {
  //   content: props.hasChilden ? '""' : 'none',
  // }
}))

const ToggleButton = styled.div({
  textAlign: 'center',
  flex: '0 0 2rem',
  height: '2rem',
  cursor: 'pointer',
})

const Expander = styled.div<{ $isOpen: boolean }>((props) => ({
  maxHeight: props.$isOpen ? '100%' : 0,
  overflow: 'hidden',
  transition: 'max-height 0.3s',
}))

export function ListItem({ label, path, children }: any) {

  const hasChildren = !!children
  const [isExpanded, setIsExpanded] = useState(false)



  return (
    <Li $hasChilden={hasChildren}>
      {hasChildren && (
      <ToggleButton onClick={() => setIsExpanded(isExpanded=>!isExpanded)}>

        <TriangleClosed />
      </ToggleButton>
        )}
      <div>
      <NavLink
        href={path}
        label={label}
      />
      <Expander $isOpen={isExpanded}>

      {children}
      </Expander>

      </div>
    </Li>
  )
}