import { redirect } from 'next/navigation'

import { Dictionary, getDictionary } from '@/i18n'

import { GlobalStaticPageProps } from '@/globals'
import { languages, defaultLanguage } from '@/config'

export type PageFunction = (_: Dictionary) => JSX.Element | null

export function makePage(fn?: PageFunction) {
  return async function Page(props: GlobalStaticPageProps) {
    const parameters = await props.params

    if (!languages.includes(parameters.locale)) {
      return redirect(`/${defaultLanguage}`)
    }

    const dictionary = await getDictionary(parameters.locale)

    return fn?.(dictionary) ?? null
  }
}
