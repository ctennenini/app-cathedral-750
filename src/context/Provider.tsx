'use client'
import { Dictionary } from '@/i18n'

import { appContext } from './context'
import { PropsWithChildren } from 'react'

export type ProviderProps = PropsWithChildren<{
  locale: string
  dictionary: Dictionary
}>

export function AppContextProvider({ children, locale, dictionary }: ProviderProps) {
  return <appContext.Provider value={{ locale, dictionary }}>{children}</appContext.Provider>
}
