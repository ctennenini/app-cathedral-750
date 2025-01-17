'use client'

import styled from 'styled-components'

import {
  Container as BaseContainer,
  Left as BaseLeft,
  Separator as BaseSeparator,
  Title as BaseTitle,
} from '../shared/ColumnLayout.components'

import { IconButton, IconButtonProps } from '@/components/IconButton'
import { CloseIcon } from '@/components/Icons'

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

export const CloseButton = styled((props: IconButtonProps) => (
  <IconButton {...props}>
    <CloseIcon />
  </IconButton>
))({
  color: 'var(--highlight)',
  backgroundColor: 'var(--white)',
})

export const Left = styled(BaseLeft)({
  backgroundColor: 'var(--highlight)',
  color: 'var(--white)',
})

export const Title = styled(BaseTitle)({
  '*': {
    color: 'var(--white)',
  },
})

export const Separator = styled(BaseSeparator)({
  borderColor: 'var(--separator-light)',
})
