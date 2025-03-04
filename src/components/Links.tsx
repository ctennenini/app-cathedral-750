'use client'

import { useHref } from '@/utils'
import NextLink from 'next/link'
import styled from 'styled-components'
import { InternalLinkIcon } from './Icons'
import { TextContent } from '@/components/Typography'
import { ComponentProps } from 'react'

export type LinkProps = ComponentProps<typeof NextLink> & {
  external?: boolean
  disabled?: boolean
}

export function Link({ href, external, disabled, ...otherProps }: LinkProps) {
  href = useHref(href)

  return (
    <NextLink
      scroll={false}
      aria-disabled={disabled}
      target={external ? '_blank' : undefined}
      href={href}
      {...otherProps}
    />
  )
}

export type BigLinkProps = LinkProps & {
  label: TextContent
  primary?: boolean
  arrow?: boolean
  $primary?: boolean
}

export const BigLink = styled(({ label, arrow, disabled, ...otherProps }: BigLinkProps) => (
  <Link onClick={disabled ? (e) => e.preventDefault() : undefined} disabled={disabled} {...otherProps}>
    <span dangerouslySetInnerHTML={{ __html: label }} />
    {arrow && <InternalLinkIcon style={{ marginLeft: '1rem' }} />}
  </Link>
))<BigLinkProps>(({ $primary }) => ({
  '&&': {
    minHeight: '120px',
    fontSize: '28px',
    fontFamily: 'var(--font-buttons)',
    display: 'inline-block',
    padding: '2.7rem 5rem',
    color: $primary ? 'var(--white)' : 'var(--black)',
    backgroundColor: $primary ? 'var(--highlight)' : 'var(--white)',
    textAlign: 'center',
    borderRadius: '12px',

    textDecoration: 'inherit',
    cursor: 'pointer',

    '&[aria-disabled]': {
      textDecoration: 'line-through',
      cursor: 'not-allowed',
    },
  },
}))
