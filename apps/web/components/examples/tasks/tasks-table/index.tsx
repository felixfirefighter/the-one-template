'use client'

import { ActionIcon, Badge, Box, Flex, Menu } from '@mantine/core'
import {
  IconChevronRight,
  IconCircleFilled,
  IconDots,
} from '@tabler/icons-react'
import { AppSize, AppText } from '@the-one/ui'
import { DataTable } from 'mantine-datatable'
import { useEffect, useState } from 'react'
import { Task, TaskType } from '../../../../types/tasks'
import { TaskPriorityItem } from '../task-priority-item'
import { TaskStatusItem } from '../task-status-item'
import { TASKS } from './data'

const PAGE_SIZE = 10

interface Props {
  activeTaskColumns: {
    [key: string]: boolean
  },
  records: Task[]
}

export const TasksTable: React.FC<Props> = ({ activeTaskColumns, records }) => {
  const [pagedRecords, setPagedRecords] = useState(records.slice(0, PAGE_SIZE))
  const [selectedRecords, setSelectedRecords] = useState<Task[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE
    setPagedRecords(records.slice(from, to))
  }, [records, page])

  return (
    <Box>
      <DataTable
        withTableBorder
        verticalSpacing={'sm'}
        borderRadius="sm"
        striped
        highlightOnHover
        records={pagedRecords}
        selectedRecords={selectedRecords}
        onSelectedRecordsChange={setSelectedRecords}
        recordsPerPage={10}
        onPageChange={setPage}
        page={page}
        totalRecords={records.length}
        columns={[
          {
            accessor: 'id',
            title: 'Task',
            width: 150,
          },
          {
            accessor: 'title',
            hidden: !activeTaskColumns.Title,
            render: (task: Task) => {
              return (
                <Flex gap={'xs'} align={'baseline'}>
                  <Badge radius={'sm'} variant='default'>{task.type}</Badge>
                  <AppText fontWeight="500" truncate="end" size="sm">
                    {task.title}
                  </AppText>
                </Flex>
              )
            },
          },
          {
            accessor: 'status',
            hidden: !activeTaskColumns.Status,
            width: 150,
            render: (task: Task) => <TaskStatusItem task={task} />,
          },
          {
            accessor: 'priority',
            hidden: !activeTaskColumns.Priority,
            width: 150,
            render: (task: Task) => <TaskPriorityItem task={task} />,
          },
          {
            accessor: '',
            width: 50,
            render: (task: Task) => {
              return (
                <Menu width={180} position="bottom-end">
                  <Menu.Target>
                    <ActionIcon variant="subtle" size={'sm'}>
                      <IconDots />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Edit</Menu.Item>
                    <Menu.Item>Make a copy</Menu.Item>
                    <Menu.Item>Favorite</Menu.Item>
                    <Menu.Divider />
                    <Menu trigger="hover" position="right-start">
                      <Menu.Target>
                        <Menu.Item
                          rightSection={
                            <IconChevronRight size={AppSize['4xl']} />
                          }
                        >
                          Labels
                        </Menu.Item>
                      </Menu.Target>
                      <Menu.Dropdown>
                        {Object.values(TaskType).map((value) => {
                          return (
                            <Menu.Item
                              leftSection={
                                <IconCircleFilled
                                  size={AppSize.md}
                                  style={{
                                    color:
                                      task.type === value
                                        ? undefined
                                        : 'transparent',
                                  }}
                                />
                              }
                              key={value}
                            >
                              {value}
                            </Menu.Item>
                          )
                        })}
                      </Menu.Dropdown>
                    </Menu>
                    <Menu.Divider />
                    <Menu.Item rightSection={'⌘⌫'}>Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              )
            },
          },
        ]}
      />
    </Box>
  )
}
