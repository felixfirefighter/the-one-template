'use client'

import { Container } from '@mantine/core'
import { useEffect, useState } from 'react'
import { TasksActionBar } from '../../../components/examples/tasks/tasks-action-bar'
import { TasksHeader } from '../../../components/examples/tasks/tasks-header'
import { TasksTable } from '../../../components/examples/tasks/tasks-table'
import { TASKS } from '../../../components/examples/tasks/tasks-table/data'
import { Task, TaskColumn } from '../../../types/tasks'

export default function Page(): JSX.Element {
  const [activeTaskColumns, setActiveTaskColumns] = useState({
    [TaskColumn.Title]: true,
    [TaskColumn.Status]: true,
    [TaskColumn.Priority]: true,
  })
  const [records, setRecords] = useState<Task[]>(TASKS)
  const [filteredText, setFilteredText] = useState('')

  useEffect(() => {
    if (filteredText !== '') {
      setRecords(
        TASKS.filter((task) =>
          task.title.toLowerCase().includes(filteredText.toLowerCase()),
        ),
      )
    } else {
      setRecords(TASKS)
    }
  }, [filteredText])

  return (
    <Container size={'xl'} p="lg">
      <TasksHeader />

      <TasksActionBar
        activeTaskColumns={activeTaskColumns}
        setActiveTaskColumns={setActiveTaskColumns}
        setFilteredText={setFilteredText}
      />

      <TasksTable records={records} activeTaskColumns={activeTaskColumns} />
    </Container>
  )
}
