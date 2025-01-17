import React, { createElement } from 'react'
import { HTMLProps } from 'react'

export type Text = string | string[]

/**
 *
 * Text components
 *
 */

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
        <p
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

function normaliseTitle(text: Text) {
  text = Array.isArray(text) ? text.join('<br />') : text
  return text.replace('\n', '<br />')
}

export type HProps = HTMLProps<HTMLHeadingElement> & {
  children: Text
}

function makeHeading(tag: string) {
  return function InnerHeading({ children, ...otherProps }: HProps) {
    return createElement(tag, {
      dangerouslySetInnerHTML: { __html: normaliseTitle(children) },
      ...otherProps,
    })
  }
}

export const H1 = makeHeading('h1')
export const H2 = makeHeading('h2')
export const H3 = makeHeading('h3')
export const H4 = makeHeading('h4')
export const H5 = makeHeading('h5')
