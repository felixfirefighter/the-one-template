export type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'

export type FontWeight = '300' | '400' | '500' | '600' | '700' | '800' | '900'

export const FONT_SIZE_MAPPER: Record<FontSize, string> = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '60px',
  '7xl': '72px',
}

export const LINE_HEIGHT_MAPPER: Record<FontSize, number> = {
  xs: 2,
  sm: 2,
  base: 1.5,
  lg: 1.5,
  xl: 1.5,
  '2xl': 1.5,
  '3xl': 1.5,
  '4xl': 1.5,
  '5xl': 1,
  '6xl': 1,
  '7xl': 1,
}
