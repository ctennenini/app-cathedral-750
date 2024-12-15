'use client'

import { Dispatch, RefObject, SetStateAction, useEffect } from 'react'

export function useClickAway(
  isExpanded: boolean,
  setExpanded: Dispatch<SetStateAction<boolean>>,
  drawerRef: RefObject<HTMLDivElement>,
) {
  useEffect(() => {
    const onClickOutside = (e: Event) => {
      if (e.defaultPrevented) {
        return
      }

      if (drawerRef.current?.contains(e.target as Node)) {
        return
      }

      setExpanded(false)
    }

    if (isExpanded) {
      // document.body.style.overflow = 'hidden'
      document.addEventListener('click', onClickOutside)
    }

    return () => {
      // document.body.style.overflow = 'auto'
      document.removeEventListener('click', onClickOutside)
    }
  }, [isExpanded])
}
