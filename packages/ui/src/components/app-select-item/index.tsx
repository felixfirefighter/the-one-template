import { Box, Flex } from '@mantine/core'
import clsx from 'clsx'
import React from 'react'
import { AppText } from '../app-text'
import styles from './index.module.css'

interface Props {
  prefix?: React.ReactNode
  title?: string
  subtitle?: string
  suffix?: React.ReactNode
  selected?: boolean

  onClick?: () => void
}

export const AppSelectItem: React.FC<Props> = ({
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
      className={clsx(styles.container, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {prefix}
      <Box px={'sm'} flex={1}>
        <AppText fontWeight="500" size="sm" lh={1} mb={'xs'}>
          {title}
        </AppText>
        <AppText c="gray.6" size="sm" lh={1}>
          {subtitle}
        </AppText>
      </Box>
      {suffix}
    </Flex>
  )
}
