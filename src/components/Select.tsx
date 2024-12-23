'use client'

import { useState, Children, useRef, HTMLProps, ComponentProps } from 'react'
import styled from 'styled-components'
import { useClickAway } from './useClickAway'

const Container = styled.div(() => ({
  display: 'inline-block',
  position: 'relative',
  height: '50px',
  userSelect: 'none',
}))

const Menu = styled.ul<{ $isOpen: boolean }>(({ $isOpen, children }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  lineHeight: '50px',

  maxHeight: `calc(100% * ${$isOpen ? Children.count(children) : 1})`,

  overflow: 'hidden',
  transition: 'max-height 0.3s',

  fontSize: '18px',
  fontWeight: '500',
  padding: '0 3rem',

  color: '#020202',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  borderRadius: '25px',

  listStyle: 'none',
}))

const Option = styled.li(() => ({
  cursor: 'pointer',

  '&:hover': {
    [Hoverer]: {
      textDecoration: 'underline',
    },
  },
}))

type TriangleProps = HTMLProps<HTMLSpanElement> & { $up?: boolean }

const Triangle = styled((props: TriangleProps) => <span {...props}>&#9662;</span>)(({ $up }) => ({
  transition: 'transform 0.3s',
  transform: `rotate(${$up ? 180 : 0}deg)`,
  marginLeft: '1rem',
}))

const Hoverer = styled.span({})

export type SelectProps = Omit<ComponentProps<typeof Container>, 'onChange' | 'value'> & {
  value: string
  onChange: (value: string) => void
  options: { label: string; value: string }[]
}

export function Select({ value, onChange, options, ...otherProps }: SelectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setOpen] = useState(false)

  useClickAway(isOpen, setOpen, containerRef)

  const currentOption = options.find(option => option.value === value)
  const otherOptions = options.filter(option => option.value !== value)

  return (
    <Container
      onClick={() => setOpen(o => !o)}
      ref={containerRef}
      {...otherProps}
    >
      <Menu
        role="menu"
        $isOpen={isOpen}
      >
        <Option>
          {currentOption?.label}
          {<Triangle $up={isOpen} />}
        </Option>
        {otherOptions.map(({ label, value }) => (
          <Option
            role="option"
            key={value}
            onClick={onChange.bind(null, value)}
          >
            <Hoverer>{label}</Hoverer>
          </Option>
        ))}
      </Menu>
    </Container>
  )
}
