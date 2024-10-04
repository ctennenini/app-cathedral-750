'use client'
import NextLink from 'next/link'
import { useParams } from 'next/navigation'
import { ComponentProps } from 'react'
import styled from 'styled-components'

export type LinkProps = ComponentProps<typeof NextLink> & {
  label: string
  external?: boolean
  disabled?: boolean
}

function useHref(href: LinkProps['href']) {
  const { locale } = useParams()
  if (href.toString().startsWith('http')) return href
  return `/${locale}/${href}`
}

export const BigLink = styled(({ href, label, external, disabled, className, as }: LinkProps) => {
  href = useHref(href)

  return (
    <NextLink
      as={as}
      href={href}
      target={external ? '_blank' : undefined}
      aria-disabled={!!disabled}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      className={className}
    >
      {label}
    </NextLink>
  )
})(({ disabled }) => ({
  display: 'inline-block',
  padding: '1rem 3rem',
  width: '100%',
  background: '#fffa',
  border: '1px solid #000',
  borderRadius: '500px',
  textAlign: 'center',
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer',
}))

export const NavItem = styled(({ href, label, external, disabled, className, as }: LinkProps) => {
  href = useHref(href)

  return (
    <NextLink
      as={as}
      href={href}
      target={external ? '_blank' : undefined}
      aria-disabled={!!disabled}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      className={className}
    >
      {label}
    </NextLink>
  )
})(({ disabled }) => ({
  fontSize: '0.75rem',
  display: 'inline-block',
  padding: '1rem 3rem',
  width: '100%',
  background: '#fffa',
  border: '1px solid #000',
  borderRadius: '500px',
  textAlign: 'center',
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer',
}))
