'use client'

import { Avatar, Box, Flex, Menu } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { PROFILE_ITEMS } from './data'
import styles from './index.module.css'

export const TasksHeader = () => {
  return (
    <Flex mb="xl" justify={'space-between'} align={'center'}>
      <Box>
        <AppText size="xl" fontWeight="700">
          Welcome back!
        </AppText>
        <AppText c="dimmed">
          Here's a list of your tasks for this month!
        </AppText>
      </Box>

      <Menu width={200} position="bottom-end">
        <Menu.Target>
          <Avatar
            bg={'gray.2'}
            className={styles.avatar}
            src={'/dashboard/avatar-1.png'}
          ></Avatar>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>
            <AppText c="dark" size="sm">
              The One
            </AppText>
            <AppText size="xs">abby@theone.com</AppText>
          </Menu.Label>
          <Menu.Divider />
          {PROFILE_ITEMS.map((item) => {
            return (
              <div key={item.label}>
                <Menu.Item
                  rightSection={
                    item.shortcut && (
                      <AppText c="dimmed" size='xs'>{item.shortcut}</AppText>
                    )
                  }
                >
                  <AppText size='sm'>{item.label}</AppText>
                </Menu.Item>

                {item.divider && <Menu.Divider />}
              </div>
            )
          })}
        </Menu.Dropdown>
      </Menu>
    </Flex>
  )
}
