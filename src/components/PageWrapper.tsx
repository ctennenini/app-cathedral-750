'use client'
import { TARGET_VIEW_HEIGHT, TARGET_VIEW_WIDTH } from '@/config'
import { ComponentProps, useEffect, useRef } from 'react'
import styled from 'styled-components'

export const PageWrapper = styled((props: ComponentProps<'div'>) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const {
        contentRect: { width },
        target,
      } = entries[0]

      const style = (target as typeof element).style
      style.fontSize = `calc(${width}px / ${TARGET_VIEW_WIDTH})`
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [ref])

  return <div {...props} ref={ref} />
})({
  position: 'relative',
  aspectRatio: `${TARGET_VIEW_WIDTH} / ${TARGET_VIEW_HEIGHT}`,
  maxWidth: '100%',
  maxHeight: '100%',
  overflow: 'hidden',
  'body > &': {
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 'auto',
  },
})
