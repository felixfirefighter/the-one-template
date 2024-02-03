import { ActionIcon, Box, Button, Divider, Flex, Select } from "@mantine/core"
import { AppText } from "@the-one/ui"
import { PRESETS } from "./data"
import { IconDotsVertical } from "@tabler/icons-react"

export const PlaygroundHeader = () => {
  return <Box>
    <Flex p={'xs'} px={'xl'} gap={'md'} align={'baseline'} justify={'space-between'}>
      <AppText fontWeight="700" size="lg">Playground</AppText>

      <Flex gap={'sm'} align={'center'}>
        <Select searchable data={PRESETS} w={300} placeholder="Load a preset"/>
        <Button variant='light'>Save</Button>
        <Button variant='light'>View Code</Button>
        <Button variant='light'>Share</Button>
        <ActionIcon variant='light' size={'lg'}>
          <IconDotsVertical />
        </ActionIcon>
      </Flex>
    </Flex>
    <Divider />
  </Box>
}