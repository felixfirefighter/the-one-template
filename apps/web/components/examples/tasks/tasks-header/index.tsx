'use client'

import { Avatar, Box, Flex, Menu } from '@mantine/core'
import { AppText } from '@the-one/ui'
import styles from './index.module.css'

export const TasksHeader = () => {
  return (
    <Flex mb='xl' justify={'space-between'} align={'center'}>
      <Box>
        <AppText size="xl" fontWeight="700">
          Welcome back!
        </AppText>
        <AppText c="dimmed">
          Here's a list of your tasks for this month!
        </AppText>
      </Box>

      <Menu position="bottom-end">
        <Menu.Target>
          <Avatar
            bg={'gray.2'}
            className={styles.avatar}
            src={'/dashboard/avatar-1.png'}
          ></Avatar>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Hello</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  )
}
