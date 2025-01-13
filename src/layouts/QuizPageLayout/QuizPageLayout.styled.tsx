'use client'

import styled from 'styled-components'

import { Left as BaseLeft, Separator as BaseSeparator } from '../shared/ColumnLayout.components'

import { IconButton, IconButtonProps } from '@/components/IconButton'
import { CloseIcon } from '@/components/Icons'

export { Container, Right, LanguageSwitcher, Header, type HeaderProps, Main } from '../shared/ColumnLayout.components'
export { ExtraContent, type ExtraContentProps } from '../shared/ColumnExtraContent'

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

export const Separator = styled(BaseSeparator)({
  borderColor: 'var(--separator-light)',
})
