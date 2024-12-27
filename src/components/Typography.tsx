'use client'

import { Fragment, HTMLProps } from 'react'

/**
 *
 * Text components
 *
 */

export type PProps = HTMLProps<HTMLParagraphElement> & {
  children: string | string[]
}

export const P = ({ children, ...otherProps }: PProps) => {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((t, i) => (
          <p
            key={i}
            {...otherProps}
          >
            {t}
          </p>
        ))}
      </>
    )
  } else {
    return <p {...otherProps}>{children}</p>
  }
}

/**
 *
 * Title components
 *
 **/

type HProps = HTMLProps<HTMLHeadingElement> & {
  children: string | string[]
}

function title(text: string | string[]) {
  if (Array.isArray(text)) {
    return (
      <>
        {text.map((t, i) => (
          <Fragment key={i}>
            {t}
            {i < text.length - 1 && <br />}
          </Fragment>
        ))}
      </>
    )
  } else {
    return text
  }
}

export const H1 = ({ children, ...otherProps }: HProps) => <h1 {...otherProps}>{title(children)}</h1>
export const H2 = ({ children, ...otherProps }: HProps) => <h2 {...otherProps}>{title(children)}</h2>
export const H3 = ({ children, ...otherProps }: HProps) => <h3 {...otherProps}>{title(children)}</h3>
export const H4 = ({ children, ...otherProps }: HProps) => <h4 {...otherProps}>{title(children)}</h4>
export const H5 = ({ children, ...otherProps }: HProps) => <h5 {...otherProps}>{title(children)}</h5>
