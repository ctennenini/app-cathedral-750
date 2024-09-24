'use client'

import Image, { ImageProps } from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { ChangeEventHandler, PropsWithChildren } from 'react'
import { languages } from '@/config'
import Link from 'next/link'

export type Action = {
  label: string
  href: string
  icon?: ImageProps['src']
}

export type BaseLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
  bgImg?: ImageProps['src']
  actions?: Action[]
}>

export function BaseLayout({
  children,
  title,
  subtitle,
  bgImg,
  actions,
}: BaseLayoutProps) {
  const { locale } = useParams()

  const router = useRouter()

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}`)
  }

  return (
    <>
      {bgImg && (
        <Image
          alt="title"
          src={bgImg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      )}
      <header>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <select value={locale} onChange={onSelect}>
          {languages.map((ln) => (
            <option key={ln}>{ln}</option>
          ))}
        </select>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{children}</div>
        {actions && (
          <nav>
            <ul>
              {actions.map((action) => (
                <li key={action.href}>
                  <Link href={action.href}>
                    {action.icon && (
                      <Image
                        alt={action.label}
                        src={action.icon}
                        quality={100}
                        width={32}
                        height={32}
                      />
                    )}
                    &nbsp;{action.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </main>
      <></>
    </>
  )
}
