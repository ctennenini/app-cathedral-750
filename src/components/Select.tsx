'use client'

import { useState, Children, useRef, HTMLProps, ComponentProps } from 'react'
import styled from 'styled-components'
import { useClickAway } from './useClickAway'

const Container = styled.div(() => ({
  display: 'inline-block',
  position: 'relative',
  height: '50em',
  userSelect: 'none',
}))

const Menu = styled.ul<{ $isOpen: boolean; $dark?: boolean }>(({ $isOpen, $dark, children }) => ({
  lineHeight: '50em',

  maxHeight: `calc(100% * ${$isOpen ? Children.count(children) : 1})`,

  overflow: 'hidden',
  transition: 'max-height 0.3s',

  fontFamily: 'var(--font-buttons)',
  padding: '0 48em',

  color: '#020202',
  backgroundColor: $dark ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.4)',
  borderRadius: '25em',

  listStyle: 'none',
}))

const Option = styled.li(() => ({
  fontSize: '18em',
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
  marginLeft: '1em',
}))

const Hoverer = styled.span({})

export type SelectProps = Omit<ComponentProps<typeof Container>, 'onChange' | 'value'> & {
  value: string
  onChange: (value: string) => void
  options: { label: string; value: string }[]
  $dark?: boolean
}

export function Select({ value, onChange, options, $dark, ...otherProps }: SelectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setOpen] = useState(false)

  useClickAway(isOpen, setOpen, containerRef)

  const currentOption = options.find((option) => option.value === value)
  const otherOptions = options.filter((option) => option.value !== value)

  return (
    <Container onClick={() => setOpen((o) => !o)} ref={containerRef} {...otherProps}>
      <Menu role="menu" $isOpen={isOpen} $dark={!!$dark}>
        <Option role="menuitem">
          {currentOption?.label}
          {<Triangle $up={isOpen} />}
        </Option>
        {otherOptions.map(({ label, value }) => (
          <Option role="menuitem" key={value} onClick={onChange.bind(null, value)}>
            <Hoverer>{label}</Hoverer>
          </Option>
        ))}
      </Menu>
    </Container>
  )
}
