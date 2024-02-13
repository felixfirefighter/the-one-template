'use client'

import { Container } from "@mantine/core";
import { TasksHeader } from "../../../components/examples/tasks/tasks-header";
import { TasksTable } from "../../../components/examples/tasks/tasks-table";
import { TasksActionBar } from "../../../components/examples/tasks/tasks-action-bar";
import { useState } from "react";
import { TaskColumn } from "../../../types/tasks";



export default function Page(): JSX.Element {

    const [activeTaskColumns, setActiveTaskColumns] = useState({
      [TaskColumn.Title]: true,
      [TaskColumn.Status]: true,
      [TaskColumn.Priority]: true,
    })

    return (
      <Container size={'xl'} p='lg'>
        <TasksHeader />

        <TasksActionBar activeTaskColumns={activeTaskColumns} setActiveTaskColumns={setActiveTaskColumns}/>

        <TasksTable activeTaskColumns={activeTaskColumns} />
      </Container>
    )
  }
  