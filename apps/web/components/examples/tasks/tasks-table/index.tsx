'use client'

import { Badge, Box, Flex } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { DataTable } from 'mantine-datatable'
import { useEffect, useState } from 'react'
import { Task } from '../../../../types/tasks'
import { TaskPriorityItem } from '../task-priority-item'
import { TaskStatusItem } from '../task-status-item'
import { TASKS } from './data'

const PAGE_SIZE = 10

export const TasksTable = () => {
  const [records, setRecords] = useState<Task[]>(TASKS.slice(0, PAGE_SIZE))
  const [selectedRecords, setSelectedRecords] = useState<Task[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE
    setRecords(TASKS.slice(from, to))
  }, [page])

  return (
    <Box>
      <DataTable
        withTableBorder
        verticalSpacing={'sm'}
        borderRadius="sm"
        striped
        highlightOnHover
        records={records}
        selectedRecords={selectedRecords}
        onSelectedRecordsChange={setSelectedRecords}
        recordsPerPage={10}
        onPageChange={setPage}
        page={page}
        totalRecords={TASKS.length}
        columns={[
          {
            accessor: 'id',
            title: 'Task',
            width: 150,
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
            width: 150,
            render: (task: Task) => <TaskStatusItem task={task} />,
          },
          {
            accessor: 'priority',
            width: 150,
            render: (task: Task) => <TaskPriorityItem task={task} />,
          },
        ]}
      />
    </Box>
  )
}
