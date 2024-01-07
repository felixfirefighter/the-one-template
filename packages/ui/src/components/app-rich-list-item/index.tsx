import { Avatar, Box, Flex } from '@mantine/core'
import React from 'react'
import { AppSpacing } from '../..'
import { AppText } from '../app-text'

interface Props {
  avatarSrc: string | null
  title?: string
  subtitle?: string
  suffix?: React.ReactNode
}

export const AppRichListItem: React.FC<Props> = ({
  avatarSrc,
  title,
  subtitle,
  suffix,
}) => {
  return (
    <Flex align={'center'} py={AppSpacing.xl}>
      <Avatar src={avatarSrc} mr={AppSpacing.lg} />
      <Box px={AppSpacing.md} flex={1}>
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
