import { useContext } from 'react'
import { appContext } from './context'

export function useAppContext() {
  const ctx = useContext(appContext)
  if (!ctx) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return ctx
}
