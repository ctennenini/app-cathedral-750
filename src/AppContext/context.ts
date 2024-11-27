'use client'
import { createContext } from 'react'

import { Dictionary } from '@/i18n'

export type AppContext = {
  dictionary: Dictionary
}

export const appContext = createContext<AppContext | null>(null)
