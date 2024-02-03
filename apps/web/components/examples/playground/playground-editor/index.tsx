import { Box, Flex, Textarea } from '@mantine/core'

interface Props {
  mode: string
}

export const PlaygroundEditor: React.FC<Props> = ({ mode }) => {
  if (mode === 'textarea') {
    return (
      <Textarea
        flex={1}
        rows={24}
        placeholder="Write a tagline for dessert shop"
      />
    )
  }

  if (mode === 'split') {
    return (
      <Flex flex={1} gap={'md'}>
        <Textarea flex={1} rows={24} placeholder="Hello there!" />
        <Textarea flex={1} rows={24} disabled />
      </Flex>
    )
  }

  return (
    <Flex flex={1} gap={'md'}>
      <Box flex={1}>
        <Textarea mb={'xs'} label="Input" rows={22} placeholder="We are going to be great!" />
        <Textarea rows={3} label="Instructions" placeholder='Fix the grammar'/>
      </Box>
      <Textarea label=" " flex={1} rows={27} disabled />
    </Flex>
  )
}
