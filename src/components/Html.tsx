'use client'
import { PropsWithChildren } from 'react'

import { useLocale } from '@/utils/utils'

export function HTML({ children, ...props }: PropsWithChildren<unknown>) {
  const lang = useLocale()
  return (
    <html lang={lang} {...props}>
      {children}
    </html>
  )
}
