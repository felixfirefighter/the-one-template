'use client'

import { Box } from '@mantine/core'
import { DataTable } from 'mantine-datatable'
import { generateRandomTask } from './utils'
import { useEffect, useState } from 'react'
import { Task } from './types'

export const TasksTable = () => {
  const [records, setRecords] = useState<Task[]>([])

  useEffect(() => {
    setRecords(Array.from({ length: 100 }, generateRandomTask))
  }, [])

  return (
    <Box>
      <DataTable
        withTableBorder
        borderRadius="sm"
        withColumnBorders
        striped
        highlightOnHover
        records={records}
        columns={[
          {
            accessor: 'id',
            title: 'Task',
          },
          { accessor: 'title' },
          {
            accessor: 'status',
          },
          { accessor: 'priority' },
        ]}
      />
    </Box>
  )
}
