'use client'

import {
  Box,
  Button,
  Flex,
  Image,
  Paper,
  SegmentedControl,
} from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { AppSize, AppText } from '@the-one/ui'
import { CONTROLS, MAIN_MUSICS } from './data'
import styles from './index.module.css'

export const MusicMain = () => {
  return (
    <Box p={'xl'} flex={1}>
      <Flex justify={'space-between'} mb="lg">
        <SegmentedControl data={CONTROLS}></SegmentedControl>
        <Button leftSection={<IconPlus size={AppSize['4xl']} />}>
          Add music
        </Button>
      </Flex>

      <AppText fontWeight="600" size="2xl">
        Listen Now
      </AppText>
      <AppText c="gray.6">Top picks for you.</AppText>

      <Box my={'md'} className={styles.topPick}>
        {MAIN_MUSICS.map((music, index) => {
          return (
            <Paper
              shadow="none"
              key={music.title}
              mr={index < MAIN_MUSICS.length ? 'md' : 0}
            >
              <Box className={styles.imageContainer} mb={'xs'}>
                <Image
                  radius={'md'}
                  h={350}
                  w={250}
                  src={music.image}
                  className={styles.image}
                ></Image>
              </Box>
              <AppText fontWeight="600" size="sm">
                {music.title}
              </AppText>
              <AppText c="gray.6" size="sm">
                {music.name}
              </AppText>
            </Paper>
          )
        })}
      </Box>
    </Box>
  )
}
