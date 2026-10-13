'use client'

import { BackArrowIcon } from './Icons'
import { IconButton, IconButtonProps } from './IconButton'
import { useHref } from '@/utils/utils'
import { useAppContext } from '@/components/AppContext'

import { useRouter } from 'next/navigation'

export type BackButtonProps = IconButtonProps & {
  href: string
}

export function BackButton({ $dark, href: hrefFromProps, ...props }: BackButtonProps) {
  const href = useHref(hrefFromProps)
  const { push } = useRouter()
  const { dictionary } = useAppContext()

  return (
    <IconButton
      aria-label={dictionary.ui.back}
      onClick={() => push(href.toString(), { scroll: false })} $dark={$dark}       {...props}
    >
      <BackArrowIcon />
    </IconButton>
  )
}
