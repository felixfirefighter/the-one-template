import { MantineColor, MantineSpacing, StyleProp, Text } from '@mantine/core'
import {
  FONT_SIZE_MAPPER,
  FontSize,
  FontWeight,
  LINE_HEIGHT_MAPPER,
} from './types'

interface Props {
  size?: FontSize
  c?: MantineColor
  ta?: StyleProp<React.CSSProperties['textAlign']>
  children?: React.ReactNode
  fontWeight?: FontWeight
  mb?: StyleProp<MantineSpacing>
}

export const AppText: React.FC<Props> = ({
  size = 'md',
  c,
  fontWeight = '400',
  ta,
  children,
  mb,
}) => {
  return (
    <Text
      mb={mb}
      size={FONT_SIZE_MAPPER[size]}
      ta={ta}
      c={c}
      style={{
        fontWeight,
        lineHeight: LINE_HEIGHT_MAPPER[size],
      }}
    >
      {children}
    </Text>
  )
}
