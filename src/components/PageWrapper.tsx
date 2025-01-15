'use client'
import { TARGET_VIEW_HEIGHT, TARGET_VIEW_WIDTH } from '@/config'
import styled from 'styled-components'

export const PageWrapper = styled.div({
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  aspectRatio: `${TARGET_VIEW_WIDTH} / ${TARGET_VIEW_HEIGHT}`,
  maxWidth: '100%',
  maxHeight: '100%',
  overflow: 'hidden',
})
