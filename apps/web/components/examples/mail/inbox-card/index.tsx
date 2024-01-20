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
    <Paper>
      <Flex>
        <AppText>{header}</AppText>
        {rightSection}
      </Flex>
      <AppText>{title}</AppText>
      <AppText>{description}</AppText>
      {bottomSection}
    </Paper>
  )
}
