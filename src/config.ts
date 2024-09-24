export const defaultLanguage = process.env.DEFAULT_LANGUAGE ?? 'en'
export const languages = process.env.LANGUAGES?.split(',') ?? [defaultLanguage]
