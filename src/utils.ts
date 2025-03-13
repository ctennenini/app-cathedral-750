'use client'
import { useParams, usePathname, redirect, RedirectType } from 'next/navigation'
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

export type HREF = ComponentProps<typeof NextLink>['href']

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

  return redirect(augmentedHref.toString(), RedirectType.replace)
}

export function useResizeObserver<T extends HTMLElement>(callback: (entry: ResizeObserverEntry) => void) {
  return (options: ResizeObserverOptions) => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        callback(entry)
      }
    })

    return (element: T) => {
      observer.observe(element, options)
      return element
    }
  }
}
