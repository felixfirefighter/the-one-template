import { Flex } from '@mantine/core'
import { IconArrowDown, IconArrowRight, IconArrowUp, IconCircle, IconCircleCheck, IconProgress } from '@tabler/icons-react'
import { AppIconSize, AppIconStroke, AppText } from '@the-one/ui'
import { assertUnreachable } from '../../../../../../packages/utils/src'
import { Task, TaskPriority } from '../../../../types/tasks'

interface Props {
  task: Task
}

export const TaskPriorityItem: React.FC<Props> = ({ task }) => {
  const TaskIcon = () => {
    switch (task.priority) {
      case TaskPriority.High:
        return <IconArrowUp stroke={AppIconStroke.sm} size={AppIconSize.sm} />
      case TaskPriority.Medium:
        return <IconArrowRight stroke={AppIconStroke.sm} size={AppIconSize.sm} />
      case TaskPriority.Low:
        return (
          <IconArrowDown stroke={AppIconStroke.sm} size={AppIconSize.sm} />
        )
      default:
        assertUnreachable(task.priority)
    }
  }

  return (
    <Flex gap="xs" align={'center'}>
      <TaskIcon />
      <AppText lh={1} size="sm">
        {task.priority}
      </AppText>
    </Flex>
  )
}
