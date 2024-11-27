export const getDictionary = async (locale: string) => {
  switch (locale) {
    case 'de':
      return import('./de.json').then((m) => m.default)
    case 'fr':
      return import('./fr.json').then((m) => m.default)
    case 'en':
    default:
      return import('./en.json').then((m) => m.default)
  }
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
