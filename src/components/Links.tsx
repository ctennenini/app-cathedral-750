'use client'

import { useHref } from '@/utils/utils'
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

export type BigLinkProps = Omit<LinkProps, 'href'> & {
  target: LinkProps['href']
  label: TextContent
  primary?: boolean
  arrow?: boolean
  $primary?: boolean
}

export const BigLink = styled(({ label, arrow, disabled, target, ...otherProps }: BigLinkProps) => (
  <Link onClick={disabled ? (e) => e.preventDefault() : undefined} disabled={disabled} href={target} {...otherProps}>
    <span dangerouslySetInnerHTML={{ __html: label }} />
    {arrow && <InternalLinkIcon style={{ marginLeft: '16em' }} />}
  </Link>
))<BigLinkProps>(({ $primary }) => ({
  '&&': {
    minHeight: '120em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20em 80em',
    color: $primary ? 'var(--white)' : 'var(--black)',
    backgroundColor: $primary ? 'var(--highlight)' : 'var(--white)',
    borderRadius: '12em',
    cursor: 'pointer',

    span: {
      fontFamily: 'var(--font-buttons)',
      fontSize: '28em',
    },

    '&[aria-disabled] > span': {
      textDecoration: 'line-through',
      cursor: 'not-allowed',
    },
  },
}))
