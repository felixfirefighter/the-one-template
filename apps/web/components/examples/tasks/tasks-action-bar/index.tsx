'use client'

import { Button, Flex, Menu, TextInput } from '@mantine/core'
import { IconAdjustmentsHorizontal, IconCheck } from '@tabler/icons-react'
import { AppSize } from '@the-one/ui'

interface Props {
  activeTaskColumns: {
    [key: string]: boolean
  }
  setActiveTaskColumns: (activeTaskColumns: { [key: string]: boolean }) => void
  setFilteredText: (text: string) => void
}

export const TasksActionBar: React.FC<Props> = ({
  activeTaskColumns,
  setActiveTaskColumns,
  setFilteredText,
}) => {
  return (
    <Flex mb="md" justify={'space-between'}>
      <Flex gap={'xs'}>
        <TextInput
          placeholder="Filter by task name..."
          onChange={(e) => setFilteredText(e.target.value)}
        />
      </Flex>
      <Menu>
        <Menu.Target>
          <Button variant="default" leftSection={<IconAdjustmentsHorizontal />}>
            View
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Toggle Columns</Menu.Label>
          <Menu.Divider />
          {Object.entries(activeTaskColumns).map(([key, value]) => {
            return (
              <Menu.Item
                key={key}
                leftSection={
                  <IconCheck
                    size={AppSize['3xl']}
                    style={{
                      color: value ? undefined : 'transparent',
                    }}
                  />
                }
                onClick={() =>
                  setActiveTaskColumns({ ...activeTaskColumns, [key]: !value })
                }
              >
                {key}
              </Menu.Item>
            )
          })}
        </Menu.Dropdown>
      </Menu>
    </Flex>
  )
}
