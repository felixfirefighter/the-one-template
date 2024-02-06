import { Flex, TextInput } from '@mantine/core'

export const TasksActionBar = () => {
  return (
    <Flex mb='md'>
      <Flex gap={'xs'}>
        <TextInput placeholder="Filter tasks..." />
      </Flex>
    </Flex>
  )
}
