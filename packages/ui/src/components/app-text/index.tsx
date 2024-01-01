import { MantineColor, Text } from '@mantine/core'
import { FONT_SIZE_MAPPER, FontSize, FontWeight, LINE_HEIGHT_MAPPER } from './types'

interface Props {
  size?: FontSize
  c?: MantineColor
  children?: React.ReactNode
  fontWeight?: FontWeight
}

export const AppText: React.FC<Props> = ({
  size = 'base',
  c,
  fontWeight = '400',
  children,
}) => {
  return (
    <Text
      size={FONT_SIZE_MAPPER[size]}
      c={c}
      style={{
        fontWeight,
        lineHeight: LINE_HEIGHT_MAPPER[size]
      }}
    >
      {children}
    </Text>
  )
}
