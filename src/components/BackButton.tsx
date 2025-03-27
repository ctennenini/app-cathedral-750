'use client'

import { BackArrowIcon } from './Icons'
import { IconButton, IconButtonProps } from './IconButton'
import { useHref } from '@/utils/utils'

import { useRouter } from 'next/navigation'

export type BackButtonProps = IconButtonProps & {
  href: string
}

export function BackButton({ $dark, href: hrefFromProps, ...props }: BackButtonProps) {
  const href = useHref(hrefFromProps)
  const { push } = useRouter()

  return (
    <IconButton onClick={() => push(href.toString(), { scroll: false })} $dark={$dark} {...props}>
      <BackArrowIcon />
    </IconButton>
  )
}
