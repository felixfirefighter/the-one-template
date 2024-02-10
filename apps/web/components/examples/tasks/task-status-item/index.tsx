import { Flex } from '@mantine/core'
import {
  IconCircle,
  IconCircleCheck,
  IconCircleLetterB,
  IconCircleX,
  IconProgress,
} from '@tabler/icons-react'
import { AppIconSize, AppIconStroke, AppText } from '@the-one/ui'
import { assertUnreachable } from '../../../../../../packages/utils/src'
import { Task, TaskStatus } from '../../../../types/tasks'

interface Props {
  task: Task
}

export const TaskStatusItem: React.FC<Props> = ({ task }) => {
  const TaskIcon = () => {
    switch (task.status) {
      case TaskStatus.Todo:
        return <IconCircle stroke={AppIconStroke.sm} size={AppIconSize.sm} />
      case TaskStatus.InProgress:
        return <IconProgress stroke={AppIconStroke.sm} size={AppIconSize.sm} />
      case TaskStatus.Done:
        return (
          <IconCircleCheck stroke={AppIconStroke.sm} size={AppIconSize.sm} />
        )
      case TaskStatus.Backlog:
        return (
          <IconCircleLetterB stroke={AppIconStroke.sm} size={AppIconSize.sm} />
        )
      case TaskStatus.Canceled:
        return <IconCircleX stroke={AppIconStroke.sm} size={AppIconSize.sm} />
      default:
        assertUnreachable(task.status)
    }
  }

  return (
    <Flex gap="xs" align={'center'}>
      <TaskIcon />
      <AppText lh={1} size="sm">
        {task.status}
      </AppText>
    </Flex>
  )
}
