export type Color = 'light' | 'dark'

export type NavMenuItem = {
  name: string
  path: string
  disabled?: boolean
  subItems?: NavMenuItem[]
}
