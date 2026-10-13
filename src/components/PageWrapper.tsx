'use client'
import { TARGET_VIEW_HEIGHT, TARGET_VIEW_WIDTH } from '@/config'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import styled from 'styled-components'
import { Loader } from '@/components/Loader'

export const PageWrapper = styled(({ children, ...otherProps }: ComponentProps<'div'>) => {
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
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
      setLoaded(true)
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [ref])

  useEffect(() => {
    setVisible(false)
    const frame = requestAnimationFrame(() => setVisible(true))

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div {...otherProps} ref={ref} style={{ opacity: visible ? 1 : 0, transition: 'opacity 220ms ease-in-out' }}>
      {children}
      <Loader $show={!loaded} />
    </div>
  )
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
