'use client'

import { Badge, Box, Flex } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { DataTable } from 'mantine-datatable'
import { useEffect, useState } from 'react'
import { Task } from '../../../../types/tasks'
import { TaskStatusItem } from '../task-status-item'
import { generateRandomTask } from './utils'
import { TaskPriorityItem } from '../task-priority-item'

export const TasksTable = () => {
  const [records, setRecords] = useState<Task[]>([])

  useEffect(() => {
    setRecords(Array.from({ length: 100 }, generateRandomTask))
  }, [])

  return (
    <Box>
      <DataTable
        withTableBorder
        verticalSpacing={'sm'}
        borderRadius="sm"
        striped
        highlightOnHover
        records={records}
        columns={[
          {
            accessor: 'id',
            title: 'Task',
          },
          {
            accessor: 'title',
            render: (task: Task) => {
              return (
                <Flex gap={'xs'} align={'baseline'}>
                  <Badge radius={'sm'}>{task.type}</Badge>
                  <AppText fontWeight="500" truncate="end" size="sm">
                    {task.title}
                  </AppText>
                </Flex>
              )
            },
          },
          {
            accessor: 'status',
            render: (task: Task) => <TaskStatusItem task={task} />,
          },
          {
            accessor: 'priority',
            render: (task: Task) => <TaskPriorityItem task={task} />,
          },
        ]}
      />
    </Box>
  )
}
