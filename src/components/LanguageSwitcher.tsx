'use client'

import { useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { languages } from '@/config'
import { Select, SelectProps } from './Select'
import { useLocale } from '@/utils'
import { useAppContext } from '@/context'

export type LanguageSwitcherProps = Partial<SelectProps>

export function LanguageSwitcher(props: LanguageSwitcherProps) {
  const locale = useLocale()
  const path = usePathname()
  const router = useRouter()
  const { dictionary } = useAppContext()

  const options = useMemo(
    () =>
      languages.map(value => {
        const label = dictionary.languages[value as keyof typeof dictionary.languages]
        if (!label) {
          throw new Error(`Language ${value} not found in dictionary`)
        }

        return {
          value,
          label,
        }
      }),
    [dictionary],
  )

  const onSelect = (lng: string) => {
    const newPath = path.replace(`/${locale}`, `/${lng}`)
    router.push(newPath, { scroll: false })
  }

  return (
    <Select
      value={locale}
      onChange={onSelect}
      options={options}
      {...props}
    />
  )
}
