import { Fragment, HTMLProps } from 'react'
import styled from 'styled-components'

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

const TitleFragment = styled.span({
  display: 'inline-block',
})

type NormaliseTitleTextParams = string | string[]

function normaliseTitleText(text: NormaliseTitleTextParams) {
  console.log('normaliseTitleText:', { text })
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
  children: NormaliseTitleTextParams
}

export const H1 = ({ children, ...otherProps }: HProps) => <h1 {...otherProps}>{normaliseTitleText(children)}</h1>
export const H2 = ({ children, ...otherProps }: HProps) => <h2 {...otherProps}>{normaliseTitleText(children)}</h2>
export const H3 = ({ children, ...otherProps }: HProps) => <h3 {...otherProps}>{normaliseTitleText(children)}</h3>
export const H4 = ({ children, ...otherProps }: HProps) => <h4 {...otherProps}>{normaliseTitleText(children)}</h4>
export const H5 = ({ children, ...otherProps }: HProps) => <h5 {...otherProps}>{normaliseTitleText(children)}</h5>
