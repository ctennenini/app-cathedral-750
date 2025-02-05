'use client'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { ComponentProps, useEffect } from 'react'

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
  const pathname = usePathname()

  if (href.toString() === '#') return href
  if (href.toString().startsWith('http')) return href
  if (href.toString().startsWith('/')) return `/${locale}${href}`

  return pathname + '/' + href
}

export function Go({ to }: { to: HREF }) {
  const augmentedHref = useHref(to)
  const router = useRouter()

  console.log('Go:', augmentedHref)

  useEffect(() => {
    router.replace(augmentedHref.toString())
  }, [router, augmentedHref])

  return null
}
