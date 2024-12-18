import localFont from 'next/font/local'

const athelas = localFont({
  src: './Athelas/Athelas-Regular.ttf',
  variable: '--font-title',
  weight: '100 900',
})

const roboto = localFont({
  src: './Roboto/Roboto-Regular.ttf',
  variable: '--font-body',
})

export function getFontClasses() {
  return `${athelas.variable} ${roboto.variable}`
}
