import { Container } from "@mantine/core";
import { TasksHeader } from "../../../components/examples/tasks/tasks-header";
import { TasksTable } from "../../../components/examples/tasks/tasks-table";
import { TasksActionBar } from "../../../components/examples/tasks/tasks-action-bar";

export default function Page(): JSX.Element {
    return (
      <Container size={'xl'} p='lg'>
        <TasksHeader />

        <TasksActionBar />

        <TasksTable />
      </Container>
    )
  }
  