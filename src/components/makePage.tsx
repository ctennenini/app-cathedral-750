import { redirect } from 'next/navigation'

import { Dictionary, getDictionary } from '@/i18n'

import { GlobalStaticPageProps } from '@/globals'
import { languages } from '@/config'

export type PageFunction = (_: Dictionary) => React.JSX.Element | null

export function makePage(fn?: PageFunction) {
  return async function Page(props: GlobalStaticPageProps) {
    const parameters = await props.params

    if (!languages.includes(parameters.locale)) {
      return redirect('/')
    }

    const dictionary = await getDictionary(parameters.locale)

    return fn?.(dictionary) ?? null
  }
}
