export type NavMenuItem = {
  label: string | string[]
  path: string
  disabled?: boolean
  subItems?: NavMenuItem[]
}
