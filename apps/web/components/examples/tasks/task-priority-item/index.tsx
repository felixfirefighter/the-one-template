'use client'

import { Flex } from '@mantine/core'
import { IconArrowDown, IconArrowRight, IconArrowUp, IconCircle, IconCircleCheck, IconProgress } from '@tabler/icons-react'
import { MAppIconSize, MAppIconStroke, MAppText } from '@the-one/mantine-ui'
import { assertUnreachable } from '../../../../../../packages/utils/src'
import { Task, TaskPriority } from '../../../../types/tasks'

interface Props {
  task: Task
}

export const TaskPriorityItem: React.FC<Props> = ({ task }) => {
  const TaskIcon = () => {
    switch (task.priority) {
      case TaskPriority.High:
        return <IconArrowUp stroke={MAppIconStroke.sm} size={MAppIconSize.sm} />
      case TaskPriority.Medium:
        return <IconArrowRight stroke={MAppIconStroke.sm} size={MAppIconSize.sm} />
      case TaskPriority.Low:
        return (
          <IconArrowDown stroke={MAppIconStroke.sm} size={MAppIconSize.sm} />
        )
      default:
        assertUnreachable(task.priority)
    }
  }

  return (
    <Flex gap="xs" align={'center'}>
      <TaskIcon />
      <MAppText lh={1} size="sm">
        {task.priority}
      </MAppText>
    </Flex>
  )
}
