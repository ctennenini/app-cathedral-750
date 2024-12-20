'use client'

import { BackArrowIcon } from './Icons'
import { IconButton, IconButtonProps } from './IconButton'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'

export function BackButton(props: IconButtonProps) {
  const href = useHref('start')
  const { push } = useRouter()

  return (
    <IconButton
      onClick={() => push(href.toString())}
      {...props}
    >
      <BackArrowIcon color={props.$dark ? '#000' : '#fff'} />
    </IconButton>
  )
}
