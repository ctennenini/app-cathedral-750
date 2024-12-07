'use client'

import { ChangeEventHandler, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { languages } from '@/config'
import { Select } from './LanguageSwitcher.styled'
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

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newPath = path.replace(`/${locale}`, `/${event.target.value}`)
    router.push(newPath)
  }

  return (
    <Select
      value={locale}
      onChange={onSelect}
    >
      {options.map(({ label, value }) => (
        <option
          key={value}
          value={value}
        >
          {label}
        </option>
      ))}
    </Select>
  )
}
