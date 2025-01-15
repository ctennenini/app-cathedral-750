import React from 'react'
import { HTMLProps } from 'react'
import styled from 'styled-components'

export type Text = string | string[]

/**
 *
 * Text components
 *
 */

const StyledP = styled.p({
  hyphens: 'auto',
})

export type PProps = HTMLProps<HTMLParagraphElement> & {
  children: Text
}

export const P = ({ children, ...otherProps }: PProps) => {
  if (!Array.isArray(children)) {
    children = [children]
  }

  return (
    <>
      {children.map((t, i) => (
        <StyledP
          key={i}
          dangerouslySetInnerHTML={{ __html: t }}
          {...otherProps}
        />
      ))}
    </>
  )
}

/**
 *
 * Title components
 *
 **/

const TitleFragment = styled.span({
  display: 'inline-block',
})

function normaliseTitle(text: Text) {
  if (Array.isArray(text)) {
    return text.map((str, i, all) => (
      <TitleFragment
        key={i}
        dangerouslySetInnerHTML={{
          __html: str + (i < all.length - 1 ? '&nbsp;' : ''),
        }}
      />
    ))
  } else {
    return <>{text}</>
  }
}

export type HProps = HTMLProps<HTMLHeadingElement> & {
  children: Text
}

function makeHeading(tag: string) {
  return styled(({ children, ...otherProps }: HProps) =>
    React.createElement(tag, otherProps, normaliseTitle(children)),
  )({
    //hyphens: 'auto',
  })
}

export const H1 = makeHeading('h1')
export const H2 = makeHeading('h2')
export const H3 = makeHeading('h3')
export const H4 = makeHeading('h4')
export const H5 = makeHeading('h5')
