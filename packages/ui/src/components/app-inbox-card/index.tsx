import { Flex, Paper } from '@mantine/core'
import clsx from 'clsx'
import React from 'react'
import { AppText } from '../app-text'
import styles from './index.module.css'
interface Props {
  header: string
  title: string
  description: string
  bottomSection: React.ReactNode
  rightSection: React.ReactNode
  active?: boolean

  onClick?: () => void
}

export const AppInboxCard: React.FC<Props> = ({
  header,
  title,
  description,
  bottomSection,
  rightSection,
  active,

  onClick,
}) => {
  return (
    <Paper
      withBorder
      p="sm"
      mb={'xs'}
      shadow="none"
      className={clsx([styles.container, { [styles.selected!]: active }])}
      onClick={onClick}
    >
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
