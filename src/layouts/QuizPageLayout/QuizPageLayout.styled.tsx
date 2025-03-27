'use client'

import styled from 'styled-components'

import {
  Container as BaseContainer,
  Left as BaseLeft,
  Separator as BaseSeparator,
  Title as BaseTitle,
} from '../shared/ColumnLayout.components'

import { IconButton } from '@/components/IconButton'
import { CloseIcon, NextArrowIcon } from '@/components/Icons'
import { Link, LinkProps } from '@/components/Links'
import { ComponentProps } from 'react'

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

export const Container = styled(BaseContainer).attrs({ blurredBackground: true, darkenedBackground: true })({
  '&&': {
    position: 'fixed',
  },
})

const StyledIconButton = styled(IconButton)({
  color: 'var(--highlight)',
  backgroundColor: 'var(--white)',
})

type ButtonProps = ComponentProps<typeof StyledIconButton> & {
  target: LinkProps['href']
}

export const CloseButton = styled(({ target, ...otherProps }: ButtonProps) => (
  <Link href={target}>
    <StyledIconButton {...otherProps}>
      <CloseIcon />
    </StyledIconButton>
  </Link>
))({})

export const NextButton = styled(({ target, ...otherProps }: ButtonProps) => (
  <Link href={target}>
    <StyledIconButton {...otherProps}>
      <NextArrowIcon />
    </StyledIconButton>
  </Link>
))({
  width: '87em',
  height: '87em',
  flexShrink: 0,
  flexGrow: 0,
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
