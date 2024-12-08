export const getDictionary = async (locale: string) => {
  const common = await import('./common.json').then((m) => m.default)
  let specific

  switch (locale) {
    case 'de':
      specific = await import('./de.json').then((m) => m.default)
      break
    case 'es':
      specific = await import('./es.json').then((m) => m.default)
      break
    case 'fr':
      specific = await import('./fr.json').then((m) => m.default)
      break
    case 'en':
    default:
      specific = await import('./en.json').then((m) => m.default)
      break
  }

  return {
    ...common,
    ...specific,
  }
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
