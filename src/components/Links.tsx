'use client'
import { useLocale } from '@/utils'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'
import styled from 'styled-components'
import { InternalLinkIcon } from './Icons'
import { Text } from '@/components/Typography'

export type LinkProps = ComponentProps<typeof NextLink> & {
  label: Text
  external?: boolean
  disabled?: boolean
  primary?: boolean
  arrow?: boolean
}

function useHref(href: LinkProps['href']) {
  const pathname = usePathname()
  const locale = useLocale()

  if (href.toString().startsWith('http')) return href
  if (href.toString().startsWith('/')) return `/${locale}/${href}`

  return pathname + '/' + href
}

export function useIsOnPath(path: string) {
  const locale = useLocale()
  const pathName = usePathname()
  return pathName.startsWith(`/${locale}${path}`)
}

export function useIsActive(path: string) {
  const locale = useLocale()
  const pathName = usePathname()

  return pathName === `/${locale}${path}`
}

export function Link({ href, label, arrow, external, disabled, ...otherProps }: LinkProps) {
  href = useHref(href)

  return (
    <NextLink
      target={external ? '_blank' : undefined}
      href={href}
      scroll={false}
      aria-disabled={disabled}
      onClick={disabled ? e => e.preventDefault() : undefined}
      {...otherProps}
    >
      <span dangerouslySetInnerHTML={{ __html: label }} />
      {arrow && <InternalLinkIcon style={{ marginLeft: '1rem' }} />}
    </NextLink>
  )
}

export type BigLinkProps = LinkProps & {
  $primary?: boolean
}

export const BigLink = styled(Link)<BigLinkProps>(({ $primary }) => ({
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
