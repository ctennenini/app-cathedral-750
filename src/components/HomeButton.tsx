'use client'

import { HomeIcon } from './Icons'
import { IconButton, IconButtonProps } from './IconButton'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'

export function HomeButton(props: IconButtonProps) {
  const href = useHref('start')
  const { push } = useRouter()

  return (
    <IconButton
      onClick={() => push(href.toString(), { scroll: false })}
      {...props}
    >
      <HomeIcon color={props.$dark ? '#000' : '#fff'} />
    </IconButton>
  )
}
