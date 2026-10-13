import bgImg from '@/assets/bg-images/dusk-wide-angel-blur-vignette.webp'

import { getDictionary } from '@/i18n'
import { START_SCREEN_LANGUAGES } from '@/config'
import { PageWrapper } from '@/components/PageWrapper'
import { StartScreen } from '@/components/kiosk/StartScreen'

export default async function Page() {
  const dictionaries = await Promise.all(START_SCREEN_LANGUAGES.map((locale) => getDictionary(locale)))

  const languages = START_SCREEN_LANGUAGES.map((locale, i) => ({
    locale,
    label: dictionaries[i].languages[locale as keyof (typeof dictionaries)[number]['languages']],
    prompt: dictionaries[i].kiosk.chooseLanguage,
  }))

  return (
    <PageWrapper>
      <StartScreen title={(await getDictionary('fr')).pages.start.title} bgImg={bgImg} languages={languages} />
    </PageWrapper>
  )
}
