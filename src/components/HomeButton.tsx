'use client'

import { HomeIcon } from './Icons'
import { IconButton, IconButtonProps } from './IconButton'
import { useHref } from '@/utils/utils'
import { useAppContext } from '@/components/AppContext'

import { useRouter } from 'next/navigation'

export function HomeButton(props: IconButtonProps) {
  const href = useHref('/')
  const { push } = useRouter()
  const { dictionary } = useAppContext()

  return (
    <IconButton aria-label={dictionary.ui.home} onClick={() => push(href.toString(), { scroll: false })} {...props}>
      <HomeIcon color={props.$dark ? 'var(--black)' : 'var(--white)'} />
    </IconButton>
  )
}
