import { Flex, Paper } from '@mantine/core'
import { AppText } from '@the-one/ui'
import React from 'react'

interface Props {
  header: string
  title: string
  description: string
  bottomSection: React.ReactNode
  rightSection: React.ReactNode
}

export const InboxCard: React.FC<Props> = ({
  header,
  title,
  description,
  bottomSection,
  rightSection,
}) => {
  return (
    <Paper withBorder p="sm" mb={'xs'} shadow="none">
      <Flex justify={'space-between'}>
        <AppText fontWeight="700" size="sm">
          {header}
        </AppText>
        {rightSection}
      </Flex>
      <AppText size="sm" mb={'xs'}>
        {title}
      </AppText>
      <AppText lineClamp={2} fontWeight="500" c="gray.6" size="sm" mb={'xs'}>
        {description}
      </AppText>
      <Flex>{bottomSection}</Flex>
    </Paper>
  )
}
