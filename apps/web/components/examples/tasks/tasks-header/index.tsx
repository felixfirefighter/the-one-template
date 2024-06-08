'use client'

import { Avatar, Box, Flex, Menu } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { PROFILE_ITEMS } from './data'
import styles from './index.module.css'

export const TasksHeader = () => {
  return (
    <Flex mb="xl" justify={'space-between'} align={'center'}>
      <Box>
        <MAppText size="xl" fontWeight="700">
          Welcome back!
        </MAppText>
        <MAppText c="dimmed">
          Here's a list of your tasks for this month!
        </MAppText>
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
            <MAppText c="dark" size="sm">
              The One
            </MAppText>
            <MAppText size="xs">abby@theone.com</MAppText>
          </Menu.Label>
          <Menu.Divider />
          {PROFILE_ITEMS.map((item) => {
            return (
              <div key={item.label}>
                <Menu.Item
                  rightSection={
                    item.shortcut && (
                      <MAppText c="dimmed" size='xs'>{item.shortcut}</MAppText>
                    )
                  }
                >
                  <MAppText size='sm'>{item.label}</MAppText>
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
