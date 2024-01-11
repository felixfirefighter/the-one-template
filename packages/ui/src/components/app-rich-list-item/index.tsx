import { Box, Flex } from '@mantine/core'
import React from 'react'
import { AppText } from '../app-text'

interface Props {
  prefix?: React.ReactNode
  title?: string
  subtitle?: string
  suffix?: React.ReactNode
}

export const AppRichListItem: React.FC<Props> = ({
  prefix,
  title,
  subtitle,
  suffix,
}) => {
  return (
    <Flex align={'center'} py={'xs'}>
      {prefix}
      <Box flex={1}>
        <AppText fontWeight="500" size="sm">
          {title}
        </AppText>
        <AppText c="gray.6" size="sm">
          {subtitle}
        </AppText>
      </Box>
      {suffix}
    </Flex>
  )
}
