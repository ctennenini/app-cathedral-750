'use client'
import { getDictionary } from '@/i18n'

import { appContext } from './context'
import { PropsWithChildren } from 'react'

export type ProviderProps = PropsWithChildren<{
  locale: string
}>

export async function AppContextProvider({ children, locale }: ProviderProps) {
  const dictionary = await getDictionary(locale)

  return <appContext.Provider value={{ dictionary }}>{children}</appContext.Provider>
}
