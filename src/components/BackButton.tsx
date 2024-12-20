'use client'

import { BackArrowIcon } from './Icons'
import { IconButton, IconButtonProps } from './IconButton'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'

export type BackButtonProps = IconButtonProps & {
  href: string
}

export function BackButton({ $dark, href: hrefFromProps, ...props }: BackButtonProps) {
  const href = useHref(hrefFromProps)
  const { push } = useRouter()

  return (
    <IconButton
      onClick={() => push(href.toString())}
      $dark={$dark}
      {...props}
    >
      <BackArrowIcon color={$dark ? '#000' : '#fff'} />
    </IconButton>
  )
}
