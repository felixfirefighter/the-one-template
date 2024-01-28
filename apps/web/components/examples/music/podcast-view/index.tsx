import { Box, Button, Paper, Space } from '@mantine/core'
import { IconBuildingBroadcastTower } from '@tabler/icons-react'
import { AppIconStroke, AppSize, AppText } from '@the-one/ui'
import styles from './index.module.css'

export const PodcastView = () => {
  return (
    <Box>
      <AppText fontWeight="600" size="2xl">
        Podcasts
      </AppText>
      <AppText c="gray.6" mb={'lg'}>
        Your favorite podcasts.
      </AppText>

      <Paper h={480} withBorder shadow="none" className={styles.podcastBox}>
        <IconBuildingBroadcastTower size={AppSize['7xl']} stroke={AppIconStroke.md} className={styles.icon}/>
        <Space mb='xs'/>
        <AppText fontWeight='700' mb={'xs'} size='lg'>No episodes added</AppText>
        <AppText mb={'lg'} c='gray.6' size='sm'>You have not added any podcasts. Add one below.</AppText>
        <Button>Add Podcast</Button>
      </Paper>
    </Box>
  )
}
