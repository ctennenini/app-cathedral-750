'use client'

import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction } from 'react'
import { Dictionary } from '@/i18n'
import React from 'react'

export type AppContext<D extends object> = {
  locale: string
  dictionary: D
  isSideBarExpanded: boolean
  setSideBarExpanded: Dispatch<SetStateAction<boolean>>
}

export type AppContextProviderProps<D extends object> = PropsWithChildren<Pick<AppContext<D>, 'locale' | 'dictionary'>>

export function makeAppContext<D extends object>() {
  const context = createContext<AppContext<D> | null>(null)

  const { Provider } = context

  function ContextProvider({ dictionary, locale, children }: AppContextProviderProps<D>) {
    const [isSideBarExpanded, setSideBarExpanded] = useState(false)

    return (
      <Provider
        value={{
          locale,
          dictionary,
          isSideBarExpanded,
          setSideBarExpanded,
        }}
      >
        {children}
      </Provider>
    )
  }

  function useContext() {
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
