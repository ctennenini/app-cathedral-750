'use client'
import { useLocale } from '@/utils'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'
import styled from 'styled-components'
import { InternalLinkIcon } from './Icons'

export type LinkProps = ComponentProps<typeof NextLink> & {
  label: string
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

  return pathName.startsWith(`/${locale}/${path}`)
}

export function useIsActive(path: string) {
  const locale = useLocale()
  const pathName = usePathname()

  return pathName.startsWith(`/${locale}/${path}`)
}

export function Link({ href, label, arrow, external, ...otherProps }: LinkProps) {
  href = useHref(href)

  return (
    <NextLink
      target={external ? '_blank' : undefined}
      href={href}
      scroll={false}
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

export const BigLink = styled(Link)<BigLinkProps>(({ disabled, $primary }) => ({
  '&&': {
    minHeight: '120px',
    fontSize: '28px',
    display: 'inline-block',
    padding: '2.7rem 5rem',
    color: $primary ? 'var(--white)' : 'var(--black)',
    backgroundColor: $primary ? 'var(--highlight)' : 'var(--white)',
    textAlign: 'center',
    borderRadius: '12px',
    textDecoration: disabled ? 'line-through' : 'inherit',
    cursor: disabled ? 'not-allowed' : 'pointer',
  },
}))

export const NavItem = styled(
  ({ href, label, external, disabled, className, as, ...otherProps }: LinkProps & { $primary?: boolean }) => {
    href = useHref(href)

    return (
      <NextLink
        as={as}
        href={href}
        target={external ? '_blank' : undefined}
        aria-disabled={!!disabled}
        onClick={disabled ? e => e.preventDefault() : undefined}
        className={className}
        {...otherProps}
      >
        {label}
      </NextLink>
    )
  },
)(({ disabled, $primary }) => ({
  width: '100%',
  height: '120px',
  fontSize: '28px',
  lineHeight: '32px',
  display: 'inline-block',
  padding: '1rem 3rem',
  color: $primary ? 'var(--white)' : 'var(--black)',
  backgroundColor: $primary ? 'var(--highlight)' : 'var(--white)',
  textAlign: 'center',
  borderRadius: '12px',
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer',
}))
