import { Box, Flex } from '@mantine/core'
import React from 'react'
import { MAppText } from '../m-app-text'
import styles from './index.module.css'
import clsx from 'clsx'

interface Props {
  prefix?: React.ReactNode
  title?: string
  subtitle?: string
  suffix?: React.ReactNode
  selected?: boolean

  onClick?: () => void
}

export const MAppSelectItem: React.FC<Props> = ({
  prefix,
  title,
  subtitle,
  suffix,
  selected,
  onClick,
}) => {
  return (
    <Flex
      p={'xs'}
      className={clsx(styles.container, { [styles.selected!] : selected })}
      onClick={onClick}
    >
      {prefix}
      <Box px={'sm'} flex={1}>
        <MAppText fontWeight="500" size="sm" lh={1} mb={'xs'}>
          {title}
        </MAppText>
        <MAppText c="gray.6" size="sm" lh={1}>
          {subtitle}
        </MAppText>
      </Box>
      {suffix}
    </Flex>
  )
}
