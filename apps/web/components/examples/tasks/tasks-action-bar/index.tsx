'use client'

import { Button, Flex, Menu, TextInput } from '@mantine/core'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'

export const TasksActionBar = () => {
  return (
    <Flex mb="md" justify={'space-between'}>
      <Flex gap={'xs'}>
        <TextInput placeholder="Filter tasks..." />
      </Flex>
      <Menu>
        <Menu.Target>
          <Button variant="default" leftSection={<IconAdjustmentsHorizontal />}>
            View
          </Button>
        </Menu.Target>

        <Menu.Dropdown></Menu.Dropdown>
      </Menu>
    </Flex>
  )
}
