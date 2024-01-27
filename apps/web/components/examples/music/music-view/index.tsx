import { Box, Image, Paper, Space } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { MADE_FOR_YOU_MUSICS, MAIN_MUSICS } from './data'
import styles from './index.module.css'

export const MusicView = () => {
  return (
    <Box>
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
              <AppText fontWeight="600">{music.title}</AppText>
              <AppText c="gray.6">{music.name}</AppText>
            </Paper>
          )
        })}
      </Box>

      <Space py="lg"></Space>

      <AppText fontWeight="600" size="2xl">
        Made for You
      </AppText>
      <AppText c="gray.6">Your personal playlists.</AppText>

      <Box my={'md'} className={styles.madeForYou}>
        {MADE_FOR_YOU_MUSICS.map((music, index) => {
          return (
            <Paper
              shadow="none"
              key={music.title}
              mr={index < MADE_FOR_YOU_MUSICS.length ? 'md' : 0}
            >
              <Box className={styles.madeForYouImageContainer} mb={'xs'}>
                <Image
                  radius={'md'}
                  h={150}
                  w={150}
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
