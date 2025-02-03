'use client'
import { useParams, redirect } from 'next/navigation'
import { ComponentProps } from 'react'

import NextLink from 'next/link'

export function useLocale() {
  const { locale } = useParams()
  if (Array.isArray(locale)) {
    return locale[0]
  } else {
    return locale
  }
}

export type LinkProps = ComponentProps<typeof NextLink> & {
  label: string
  external?: boolean
  disabled?: boolean
}

export type HREF = LinkProps['href']

export function useHref(href: HREF) {
  const locale = useLocale()
  const isHash = href === '#'

  const isExternal = href.toString().startsWith('http')
  if (isExternal || isHash) {
    return href
  }

  return `/${locale}/${href}`
}

export function Go({ to }: { to: HREF }) {
  const augmentedHref = useHref(to)
  return redirect(augmentedHref.toString())
}
