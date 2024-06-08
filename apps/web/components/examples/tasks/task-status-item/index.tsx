import { Flex } from '@mantine/core'
import {
  IconCircle,
  IconCircleCheck,
  IconCircleLetterB,
  IconCircleX,
  IconProgress,
} from '@tabler/icons-react'
import { MAppIconSize, MAppIconStroke, MAppText } from '@the-one/mantine-ui'
import { assertUnreachable } from '../../../../../../packages/utils/src'
import { Task, TaskStatus } from '../../../../types/tasks'

interface Props {
  task: Task
}

export const TaskStatusItem: React.FC<Props> = ({ task }) => {
  const TaskIcon = () => {
    switch (task.status) {
      case TaskStatus.Todo:
        return <IconCircle stroke={MAppIconStroke.sm} size={MAppIconSize.sm} />
      case TaskStatus.InProgress:
        return <IconProgress stroke={MAppIconStroke.sm} size={MAppIconSize.sm} />
      case TaskStatus.Done:
        return (
          <IconCircleCheck stroke={MAppIconStroke.sm} size={MAppIconSize.sm} />
        )
      case TaskStatus.Backlog:
        return (
          <IconCircleLetterB stroke={MAppIconStroke.sm} size={MAppIconSize.sm} />
        )
      case TaskStatus.Canceled:
        return <IconCircleX stroke={MAppIconStroke.sm} size={MAppIconSize.sm} />
      default:
        assertUnreachable(task.status)
    }
  }

  return (
    <Flex gap="xs" align={'center'}>
      <TaskIcon />
      <MAppText lh={1} size="sm">
        {task.status}
      </MAppText>
    </Flex>
  )
}
