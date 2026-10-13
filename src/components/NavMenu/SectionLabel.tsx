'use client'

import styled from 'styled-components'
import { Link } from '@/components/Links'
import { ProgressDots } from '@/components/ProgressDots'
import { useNavPosition } from './useNavPosition'

const Container = styled(Link)({
  maxWidth: '300em',
  minHeight: '88em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  gap: '12em',
  textAlign: 'right',
  color: 'var(--separator-dark)',
  fontFamily: 'var(--font-buttons)',

  '& > span': {
    fontSize: '20em',
    lineHeight: 1.25,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },

  '&:active': {
    opacity: 0.6,
  },
})

/**
 * "Where am I?": the section the current page belongs to (from the navigation menu)
 * and its position in that section. Touching it opens the section.
 */
export function SectionLabel() {
  const position = useNavPosition()

  if (!position) {
    return null
  }

  const { section, index, count } = position
  const label = Array.isArray(section.label) ? section.label.join(' ') : section.label

  return (
    <Container href={section.path}>
      <span dangerouslySetInnerHTML={{ __html: label }} />
      {count > 1 && <ProgressDots index={index} count={count} label={`${index + 1} / ${count}`} />}
    </Container>
  )
}
