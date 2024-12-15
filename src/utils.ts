'use client'
import { useParams } from 'next/navigation'
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

export function useHref(href: LinkProps['href']) {
  const locale = useLocale()
  if (href.toString().startsWith('http')) return href
  return `/${locale}/${href}`
}
