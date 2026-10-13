'use client'

import { useRouter, usePathname } from 'next/navigation'
import styled from 'styled-components'
import { START_SCREEN_LANGUAGES } from '@/config'
import { useLocale } from '@/utils/utils'
import { useAppContext } from '@/components/AppContext'

export type LanguageSwitcherProps = {
  className?: string
  $dark?: boolean
}

// same quiet, see-through grey as the round icon buttons, so it doesn't compete with the content
const Group = styled.div<{ $dark?: boolean }>(({ $dark }) => ({
  display: 'inline-flex',
  gap: '4em',
  padding: '6em',
  borderRadius: '44em',
  backgroundColor: $dark ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)',
  color: $dark ? 'var(--black)' : 'var(--white)',
}))

const Option = styled.button<{ $active: boolean; $dark?: boolean }>(({ $active, $dark }) => {
  const tint = $dark ? '0, 0, 0' : '255, 255, 255'

  return {
    minWidth: '88em',
    height: '76em',
    padding: '0 20em',
    border: 'none',
    borderRadius: '38em',
    backgroundColor: $active ? `rgba(${tint}, 0.2)` : 'transparent',
    color: 'inherit',
    opacity: $active ? 1 : 0.7,
    fontFamily: 'var(--font-buttons)',
    fontWeight: $active ? 700 : 400,
    cursor: 'pointer',
    transition: 'background-color 0.15s',

    span: {
      fontSize: '26em',
      letterSpacing: '0.05em',
    },

    '&:active': {
      backgroundColor: `rgba(${tint}, 0.3)`,
    },
  }
})

/**
 * All languages are always visible (FR | DE | EN), so switching is a single touch.
 * Switching keeps the current page, including the current step of multi-part pages.
 */
export function LanguageSwitcher({ className, $dark }: LanguageSwitcherProps) {
  const locale = useLocale()
  const path = usePathname()
  const router = useRouter()
  const { dictionary } = useAppContext()

  const onSelect = (lng: string) => {
    if (lng === locale) {
      return
    }
    const newPath = path.replace(`/${locale}`, `/${lng}`)
    router.push(newPath + window.location.search, { scroll: false })
  }

  return (
    <Group className={className} $dark={$dark} role="group">
      {START_SCREEN_LANGUAGES.map((lng) => (
        <Option
          key={lng}
          lang={lng}
          $active={lng === locale}
          $dark={$dark}
          aria-pressed={lng === locale}
          aria-label={dictionary.languages[lng as keyof typeof dictionary.languages]}
          onClick={() => onSelect(lng)}
        >
          <span>{lng.toUpperCase()}</span>
        </Option>
      ))}
    </Group>
  )
}
