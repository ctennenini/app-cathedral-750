export type Color = 'light' | 'dark'

export type NavMenuItem = {
  label: string
  path: string
  disabled?: boolean
  subItems?: NavMenuItem[]
}
