'use client'

import { Box, Button, Flex, SegmentedControl } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { AppSize } from '@the-one/ui'
import { useState } from 'react'
import { MusicView } from '../music-view'
import { CONTROLS } from './data'
import { PodcastView } from '../podcast-view'

export const MusicMain = () => {
  const [activeControl, setActiveControl] = useState('music')

  return (
    <Box p={'xl'} flex={1}>
      <Flex justify={'space-between'} mb="lg">
        <SegmentedControl
          data={CONTROLS}
          value={activeControl}
          onChange={(value) => setActiveControl(value)}
        ></SegmentedControl>
        <Button leftSection={<IconPlus size={AppSize['4xl']} />}>
          Add music
        </Button>
      </Flex>

      {activeControl === 'music' && <MusicView />}
      {activeControl === 'podcasts' && <PodcastView />}
    </Box>
  )
}
