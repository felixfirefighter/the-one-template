export interface HeaderProps {
  title: string
  isBold?: boolean
  items: HeaderItem[]
}

export interface HeaderItem {
  title: string
  subText?: string
  hasDivider?: boolean
  disabled?: boolean
  items?: HeaderSubItem[]
}

export interface HeaderSubItem {
  title: string
  subText?: string
  disabled?: boolean
}