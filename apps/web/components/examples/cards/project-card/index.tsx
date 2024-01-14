import { Box, Button, Flex, Paper, Pill } from '@mantine/core'
import { IconCircle, IconSquare, IconStar } from '@tabler/icons-react'
import { AppSize, AppText } from '@the-one/ui'
import { useState } from 'react'

export const ProjectCard = () => {
  const [isStarred, setIsStarred] = useState(false)

  return (
    <Paper shadow="md" p="lg" withBorder>
      <Flex>
        <Box flex={1} mr={'xs'}>
          <AppText fontWeight="500">the-one</AppText>
          <AppText c="gray.6" size="sm" mb="lg">
            Beautiful template built on top of Mantine that you can copy and
            paste into your apps. Accessible. Open Source.
          </AppText>
        </Box>
        <Button
          leftSection={<IconStar size={AppSize['3xl']} />}
          rightSection={<Pill w={30}>{isStarred ? 1 : 0}</Pill>}
          onClick={() => setIsStarred(!isStarred)}
        >
          Star
        </Button>
      </Flex>

      <Flex align={'center'} gap="md" c="gray.6">
        <Flex align={'center'} gap="xs">
          <IconSquare size={AppSize.xl} />
          <AppText size="sm" lh={1}>
            TypeScript
          </AppText>
        </Flex>

        <Flex align={'center'} gap="xs">
          <IconCircle size={AppSize.xl} />
          <AppText size="sm" lh={1}>
            React
          </AppText>
        </Flex>

        <AppText size="sm" lh={1}>
          Updated January 2023
        </AppText>
      </Flex>
    </Paper>
  )
}
