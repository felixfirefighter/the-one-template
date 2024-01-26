import { Box, Button, Flex, SegmentedControl } from '@mantine/core'
import { CONTROLS } from './data'
import { IconPlus } from '@tabler/icons-react'
import { AppSize } from '@the-one/ui'

export const MusicMain = () => {
  return (
    <Box p={'lg'} flex={1}>
      <Flex justify={'space-between'}>
        <SegmentedControl data={CONTROLS}></SegmentedControl>
        <Button leftSection={<IconPlus size={AppSize['4xl']} />}>Add music</Button>
      </Flex>
    </Box>
  )
}
