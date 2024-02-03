'use client'

import { Box, Flex, Textarea } from '@mantine/core'
import { PlaygroundOptions } from '../playground-options'

export const PlaygroundMain = () => {
  return (
    <Box p={'xs'} px={'md'}>
      <Flex>
        <Textarea flex={1} rows={30}></Textarea>
        <PlaygroundOptions />
      </Flex>
    </Box>
  )
}
