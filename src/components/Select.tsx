'use client'

import { useState, Children, useRef } from 'react'
import styled from 'styled-components'
import { useClickAway } from './useClickAway'

const Container = styled.nav(() => ({
  position: 'relative',
  height: '70px',
}))

const Menu = styled.ul<{ $isOpen: boolean }>(({ $isOpen, children }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  lineHeight: '70px',

  maxHeight: `calc(100% * ${$isOpen ? Children.count(children) : 1})`,

  overflow: 'hidden',
  transition: 'max-height 0.3s',

  fontSize: '25px',
  fontWeight: '500',
  fontFamily: 'roboto',
  color: '#020202',

  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  padding: '0 60px',
  borderRadius: '35px',

  listStyle: 'none',
}))

const Option = styled.li(() => ({
  cursor: 'pointer',

  '&:hover': {
    textDecoration: 'underline',
  },
}))

const Triangle = styled((props: { $up: boolean }) => <span {...props}>&#9662;</span>)(({ $up }) => ({
  position: 'absolute',
  transition: 'transform 0.3s',
  transform: `rotate(${$up ? 180 : 0}deg)`,
}))

export type SelectProps = {
  value: string
  onChange: (value: string) => void
  options: { label: string; value: string }[]
}

export function Select({ value, onChange, options }: SelectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setOpen] = useState(false)
  
  useClickAway(isOpen, setOpen, containerRef)

  const currentOption = options.find((option) => option.value === value)
  const otherOptions = options.filter((option) => option.value !== value)

  return (
    <Container onClick={() => setOpen((o) => !o)} ref={containerRef}>
      <Menu
        role="menu"
        $isOpen={isOpen}
      >
        <Option>
          {currentOption?.label}&nbsp;{<Triangle $up={isOpen} />}
        </Option>
        {otherOptions.map(({ label, value }) => (
          <Option
            role="option"
            key={value}
            onClick={onChange.bind(null, value)}
          >
            {label}
          </Option>
        ))}
      </Menu>
    </Container>
  )
}
