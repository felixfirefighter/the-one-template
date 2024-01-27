import { Box, Button, Flex, SegmentedControl } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { AppSize } from '@the-one/ui'
import { CONTROLS } from './data'
import { MusicView } from '../music-view'

export const MusicMain = () => {
  return (
    <Box p={'xl'} flex={1}>
      <Flex justify={'space-between'} mb="lg">
        <SegmentedControl data={CONTROLS}></SegmentedControl>
        <Button leftSection={<IconPlus size={AppSize['4xl']} />}>
          Add music
        </Button>
      </Flex>

      <MusicView />
    </Box>
  )
}
