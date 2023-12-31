import { MantineColor, Text } from '@mantine/core'

type TextSize =
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

interface Props {
  size?: TextSize
  c?: MantineColor
  children?: React.ReactNode
}

const FONT_SIZE_MAPPER: Record<TextSize, string> = {
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

export const AppText: React.FC<Props> = ({ size = 'base', c, children }) => {
  return (
    <Text size={FONT_SIZE_MAPPER[size]} c={c}>
      {children}
    </Text>
  )
}
