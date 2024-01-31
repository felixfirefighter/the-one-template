export interface HeaderProps {
  title: string
  isBold?: boolean
  items: HeaderItem[]
}

export interface HeaderItem extends HeaderSubItem {
  items?: HeaderSubItem[]
}

export interface HeaderSubItem {
  title: string
  subText?: string | React.ReactNode
  prefix?: string | React.ReactNode
  disabled?: boolean
  hasDivider?: boolean
}