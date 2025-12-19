'use client'

import { Box, Button, Flex, Paper, Pill } from '@mantine/core'
import { IconCircle, IconSquare, IconStar } from '@tabler/icons-react'
import { MAppSize, MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'

export const ProjectCard = () => {
  const [isStarred, setIsStarred] = useState(false)

  return (
    <Paper shadow="md" p="lg" withBorder>
      <Flex>
        <Box flex={1} mr={'xs'}>
          <MAppText fontWeight="500">the-one</MAppText>
          <MAppText c="gray.6" size="sm" mb="lg">
            Beautiful template built on top of Mantine that you can copy and
            paste into your apps. Accessible. Open Source.
          </MAppText>
        </Box>
        <Button
          leftSection={<IconStar size={MAppSize['3xl']} />}
          rightSection={<Pill w={30}>{isStarred ? 1 : 0}</Pill>}
          onClick={() => setIsStarred(!isStarred)}
        >
          Star
        </Button>
      </Flex>

      <Flex align={'center'} gap="md" c="gray.6">
        <Flex align={'center'} gap="xs">
          <IconSquare size={MAppSize.xl} />
          <MAppText size="sm" lh={1}>
            TypeScript
          </MAppText>
        </Flex>

        <Flex align={'center'} gap="xs">
          <IconCircle size={MAppSize.xl} />
          <MAppText size="sm" lh={1}>
            React
          </MAppText>
        </Flex>

        <MAppText size="sm" lh={1}>
          Updated January 2023
        </MAppText>
      </Flex>
    </Paper>
  )
}
