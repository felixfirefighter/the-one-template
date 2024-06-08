import { Box, Flex } from '@mantine/core'
import React from 'react'
import { MAppText } from '../m-app-text'

interface Props {
  prefix?: React.ReactNode
  title?: string
  subtitle?: string
  suffix?: React.ReactNode
}

export const MAppRichListItem: React.FC<Props> = ({
  prefix,
  title,
  subtitle,
  suffix,
}) => {
  return (
    <Flex align={'center'} py={'xs'}>
      {prefix}
      <Box flex={1}>
        <MAppText fontWeight="500" size="sm">
          {title}
        </MAppText>
        <MAppText c="gray.6" size="xs">
          {subtitle}
        </MAppText>
      </Box>
      {suffix}
    </Flex>
  )
}
