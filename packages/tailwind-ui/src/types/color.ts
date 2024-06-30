export const COLORS = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

export type Color =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'

export type ColorStatus = 'success' | 'error' | 'warning' | 'neutral' | 'brand'

export interface ColorMap {
  [key: string]: string
}

export interface ColorStatusMap {
  [key: string]: string
}

export const COLOR_MAP = COLORS.reduce((acc, color) => {
  acc[color] = `text-${color}-600 bg-${color}-100 border-${color}-200`
  return acc
}, {} as ColorMap)

export const COLOR_STATUS_MAP = COLORS.reduce((acc, color) => {
  acc[color] = `text-${color}-600 bg-${color}-50 border-${color}-200`
  return acc
}, {} as ColorStatusMap)
