import { MantineColor, MantineLineHeight, MantineSpacing, MantineStyleProp, StyleProp, Text } from '@mantine/core'
import {
  FONT_SIZE_MAPPER,
  FontSize,
  FontWeight,
  LINE_HEIGHT_MAPPER,
} from './types'
import styles from './index.module.css'

type TextTruncate = 'end' | 'start' | boolean;

interface Props {
  size?: FontSize
  c?: MantineColor
  w?: StyleProp<React.CSSProperties['width']>
  ta?: StyleProp<React.CSSProperties['textAlign']>
  children?: React.ReactNode
  fontWeight?: FontWeight
  mb?: StyleProp<MantineSpacing>
  lh?: StyleProp<MantineLineHeight | number | (string & {})>
  lineClamp?: number
  style?: MantineStyleProp
  truncate?: TextTruncate
}

export const AppText: React.FC<Props> = ({
  size = 'md',
  w,
  c,
  fontWeight = '400',
  ta,
  children,
  mb,
  lh,
  lineClamp,
  truncate,
  style
}) => {
  return (
    <Text
      w={w}
      lineClamp={lineClamp}
      className={styles.text}
      lh={lh || LINE_HEIGHT_MAPPER[size]}
      mb={mb}
      size={FONT_SIZE_MAPPER[size]}
      ta={ta}
      c={c}
      truncate={truncate}
      style={{
        fontWeight,
        ...style
      }}
    >
      {children}
    </Text>
  )
}
