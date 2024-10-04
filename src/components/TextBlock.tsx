'use client'

import styled from 'styled-components'

export function TextBlock({ text }: { text: string | string[] }) {
  if (Array.isArray(text)) {
    return (
      <Container>
        {text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </Container>
    )
  } else {
    return (
      <Container>
        <p>{text}</p>
      </Container>
    )
  }
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  padding: '1.5rem 1rem',
  backgroundColor: '#fff9',
})
