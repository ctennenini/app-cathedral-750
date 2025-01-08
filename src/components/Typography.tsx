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

type NormaliseTitleTextParams = string | string[]

function normaliseTitleText(text: NormaliseTitleTextParams) {
  if (Array.isArray(text)) {
    return text.join('<br />')
  } else {
    return text
  }
}

export type HProps = HTMLProps<HTMLHeadingElement> & {
  children: NormaliseTitleTextParams
}

export const H1 = ({ children, ...otherProps }: HProps) => (
  <h1
    dangerouslySetInnerHTML={{ __html: normaliseTitleText(children) }}
    {...otherProps}
  />
)
export const H2 = ({ children, ...otherProps }: HProps) => (
  <h2
    dangerouslySetInnerHTML={{ __html: normaliseTitleText(children) }}
    {...otherProps}
  />
)
export const H3 = ({ children, ...otherProps }: HProps) => (
  <h3
    dangerouslySetInnerHTML={{ __html: normaliseTitleText(children) }}
    {...otherProps}
  />
)
export const H4 = ({ children, ...otherProps }: HProps) => (
  <h4
    dangerouslySetInnerHTML={{ __html: normaliseTitleText(children) }}
    {...otherProps}
  />
)
export const H5 = ({ children, ...otherProps }: HProps) => (
  <h5
    dangerouslySetInnerHTML={{ __html: normaliseTitleText(children) }}
    {...otherProps}
  />
)
