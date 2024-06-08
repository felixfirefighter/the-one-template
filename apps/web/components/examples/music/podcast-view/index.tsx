import { Box, Button, Paper, Space } from '@mantine/core'
import { IconBuildingBroadcastTower } from '@tabler/icons-react'
import { MAppIconStroke, MAppSize, MAppText } from '@the-one/mantine-ui'
import styles from './index.module.css'

export const PodcastView = () => {
  return (
    <Box>
      <MAppText fontWeight="600" size="2xl">
        Podcasts
      </MAppText>
      <MAppText c="gray.6" mb={'lg'}>
        Your favorite podcasts.
      </MAppText>

      <Paper h={480} withBorder shadow="none" className={styles.podcastBox}>
        <IconBuildingBroadcastTower size={MAppSize['7xl']} stroke={MAppIconStroke.md} className={styles.icon}/>
        <Space mb='xs'/>
        <MAppText fontWeight='700' mb={'xs'} size='lg'>No episodes added</MAppText>
        <MAppText mb={'lg'} c='gray.6' size='sm'>You have not added any podcasts. Add one below.</MAppText>
        <Button>Add Podcast</Button>
      </Paper>
    </Box>
  )
}
