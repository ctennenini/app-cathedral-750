'use client'

import styled from 'styled-components'

import {
  Container as BaseContainer,
  Left as BaseLeft,
  Separator as BaseSeparator,
  Title as BaseTitle,
} from '../shared/ColumnLayout.components'

import { IconButton, IconButtonProps } from '@/components/IconButton'
import { CloseIcon, NextArrowIcon } from '@/components/Icons'
import { Link, LinkProps } from '@/components/Links'

export {
  Text,
  Right,
  LanguageSwitcher,
  Header,
  type HeaderProps,
  Main,
  Footer,
} from '../shared/ColumnLayout.components'
export { ExtraContent, type ExtraContentProps } from '../shared/ColumnExtraContent'

export const Container = styled(BaseContainer)({
  '&&': {
    position: 'fixed',
  },
})

type ButtonProps = LinkProps & IconButtonProps

export const CloseButton = styled(({ href, ...iconProps }: ButtonProps) => (
  <Link href={href}>
    <IconButton {...iconProps}>
      <CloseIcon />
    </IconButton>
  </Link>
))({
  color: 'var(--highlight)',
  backgroundColor: 'var(--white)',
})

export const NextButton = styled(({ href, ...iconProps }: ButtonProps) => (
  <Link href={href}>
    <IconButton {...iconProps}>
      <NextArrowIcon />
    </IconButton>
  </Link>
))({
  backgroundColor: 'var(--white)',
  color: 'var(--highlight)',
  width: '87px',
  height: '87px',
  flexShrink: 0,
  flexGrow: 0,
  alignSelf: 'flex-end',
})

export const Left = styled(BaseLeft)({
  backgroundColor: 'var(--highlight)',
  color: 'var(--white)',
})

export const Title = styled(BaseTitle)({
  '& *': {
    color: 'var(--white)',
  },
})

export const Separator = styled(BaseSeparator)({
  borderColor: 'var(--separator-light)',
})
