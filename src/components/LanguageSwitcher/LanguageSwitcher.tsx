'use client'

import { ChangeEventHandler } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { languages } from '@/config'
import { Select } from './LanguageSwitcher.styled'
import { useLocale } from '@/utils'

export function LanguageSwitcher() {
  const locale = useLocale()
  const path = usePathname()
  const router = useRouter()

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newPath = path.replace(`/${locale}`, `/${event.target.value}`)
    router.push(newPath)
  }

  return (
    <Select
      value={locale}
      onChange={onSelect}
    >
      {languages.map((ln) => (
        <option key={ln}>{ln}</option>
      ))}
    </Select>
  )
}
