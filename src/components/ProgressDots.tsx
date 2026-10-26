'use client'

import styled from 'styled-components'

type ProgressDotsProps = {
  index: number // current position, starting at 0
  count: number
  label: string // read out by screen readers, e.g. "2 / 4"
  className?: string
}

const Dots = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8em',
})

const Dot = styled.span<{ $current: boolean; $done: boolean }>(({ $current, $done }) => ({
  width: $current ? '28em' : '10em',
  height: '10em',
  borderRadius: '5em',
  backgroundColor: $current || $done ? 'var(--highlight)' : 'rgba(0, 0, 0, 0.2)',
  opacity: $done ? 0.5 : 1,
  transition: 'width 0.2s',
}))

/**
 * A row of dots showing progress through a series, e.g. ● ● ━ ○ for "3 of 4".
 */
export function ProgressDots({ index, count, label, className }: ProgressDotsProps) {
  return (
    <Dots className={className} role="img" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <Dot key={i} $current={i === index} $done={i < index} />
      ))}
    </Dots>
  )
}
