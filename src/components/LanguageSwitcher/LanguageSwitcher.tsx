'use client'

import { ChangeEventHandler } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { languages } from '@/config'
import { Select } from './LanguageSwitcher.styled'

export function LanguageSwitcher() {
  const { locale } = useParams()
  const router = useRouter()

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}`)
  }

  return (
    <Select value={locale} onChange={onSelect}>
      {languages.map((ln) => (
        <option key={ln}>{ln}</option>
      ))}
    </Select>
  )
}
