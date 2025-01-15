import localFont from 'next/font/local'

const font1 = localFont({
  variable: '--font-title',
  src: [
    {
      path: './Athelas/Athelas-Bold.ttf',
      weight: 'bold',
    },
    {
      path: './Athelas/Athelas-Italic.ttf',
      style: 'italic',
    },
    {
      path: './Athelas/Athelas-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
  ],
})

const font2 = localFont({
  variable: '--font-body',
  src: [
    { path: './Roboto/Roboto-Bold.ttf', weight: 'bold' },
    { path: './Roboto/Roboto-Italic.ttf', style: 'italic' },
    { path: './Roboto/Roboto-Regular.ttf', weight: 'normal' },
    { path: './Roboto/Roboto-Medium.ttf', weight: 'bold' },
  ],
})

const font3 = localFont({
  variable: '--font-buttons',
  src: './Roboto/Roboto-Medium.ttf',
})

export function getFontClasses() {
  return [font1, font2, font3].map(font => font.variable).join(' ')
}
