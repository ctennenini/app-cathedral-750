import localFont from 'next/font/local'

const athelas = localFont({
  src: './Athelas/Athelas-Regular.ttf',
  variable: '--font-title',
  weight: '100 900',
})

export function getFontClasses() {
  return `${athelas.variable}`
}
