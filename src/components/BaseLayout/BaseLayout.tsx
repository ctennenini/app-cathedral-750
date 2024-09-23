'use client'

import { useParams, useRouter } from 'next/navigation'
import { ChangeEventHandler, PropsWithChildren } from 'react'
import { languages } from '@/../config.json'

export type BaseLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
}>

export function BaseLayout({ children, title, subtitle }: BaseLayoutProps) {
  const { locale } = useParams()

  const router = useRouter()

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}`)
  }

  return (
    <>
      <header>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <select value={locale} onChange={onSelect}>
          {languages.map((ln) => (
            <option key={ln}>{ln}</option>
          ))}
        </select>
      </header>
      <main>{children}</main>
    </>
  )
}
