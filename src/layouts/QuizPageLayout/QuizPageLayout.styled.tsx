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

type ButtonProps = LinkProps

const StyledIconButton = styled(IconButton)({
  color: 'var(--highlight)',
  backgroundColor: 'var(--white)',
})

export const CloseButton = styled((props: ButtonProps) => (
  <Link {...props}>
    <StyledIconButton>
      <CloseIcon />
    </StyledIconButton>
  </Link>
))({
  color: 'var(--highlight)',
  backgroundColor: 'var(--white)',
})

export const NextButton = styled((props: ButtonProps) => (
  <Link {...props}>
    <StyledIconButton>
      <NextArrowIcon />
    </StyledIconButton>
  </Link>
))({
  backgroundColor: 'var(--white)',
  color: 'var(--highlight)',
  width: '87px',
  height: '87px',
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
