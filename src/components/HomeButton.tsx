'use client'

import { HomeIcon } from './Icons'
import { IconButton, IconButtonProps } from './IconButton'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'

export function HomeButton(props: IconButtonProps) {
  const href = useHref('start')
  const { push } = useRouter()

  console.log('HomeButton', href)

  return (
    <IconButton
      onClick={() => push(href.toString())}
      {...props}
    >
      <HomeIcon color={props.$dark ? '#000' : '#fff'} />
    </IconButton>
  )
}
