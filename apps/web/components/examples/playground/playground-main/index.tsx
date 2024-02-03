'use client'

import { ActionIcon, Box, Button, Flex } from '@mantine/core'
import { IconHistory } from '@tabler/icons-react'
import { useState } from 'react'
import { PlaygroundEditor } from '../playground-editor'
import { PlaygroundOptions } from '../playground-options'

export const PlaygroundMain = () => {
  const [mode, setMode] = useState('textarea')

  return (
    <Box p={'lg'} px={'md'}>
      <Flex mb={'md'}>
        <Box px={'sm'} flex={1}>
          <PlaygroundEditor mode={mode} />
        </Box>
        <PlaygroundOptions mode={mode} setMode={setMode} />
      </Flex>
      <Flex px={'sm'} gap={'xs'}>
        <Button>Submit</Button>
        <ActionIcon variant="light" size={36}>
          <IconHistory stroke={1.5} size={16} />
        </ActionIcon>
      </Flex>
    </Box>
  )
}
