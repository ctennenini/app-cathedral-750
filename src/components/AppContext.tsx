'use client'

import { createContext } from 'react'
import { Dictionary } from '@/i18n'
import React from 'react'

export type AppContext<D extends object> = {
  locale: string
  dictionary: D
}

export function makeAppContext<D extends object>() {
  const context = createContext<AppContext<D> | null>(null)

  const { Provider } = context

  const ContextProvider = ({ value, children }: { value: AppContext<D>; children: React.ReactNode }) => {
    return <Provider value={value}>{children}</Provider>
  }

  const useContext = () => {
    const ctx = React.useContext(context)
    if (!ctx) {
      throw new Error('useAppContext must be used within a AppContextProvider')
    }
    return ctx
  }

  return { ContextProvider, useContext }
}

const { ContextProvider: AppContextProvider, useContext: useAppContext } = makeAppContext<Dictionary>()

export { AppContextProvider, useAppContext }
