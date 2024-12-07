'use client'

import { ChangeEventHandler, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { languages } from '@/config'
import { Select } from './Select'
import { useLocale } from '@/utils'
import { useAppContext } from '@/AppContext'

export function LanguageSwitcher() {
  const locale = useLocale()
  const path = usePathname()
  const router = useRouter()
  const { dictionary } = useAppContext()

  const options = useMemo(
    () =>
      languages.map((value) => {
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
    router.push(newPath)
  }

  return (
    <Select
      value={locale}
      onChange={onSelect}
      options={options}
    />
  )
}
