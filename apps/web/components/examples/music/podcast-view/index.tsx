import { Box } from '@mantine/core'
import { AppText } from '@the-one/ui'

export const PodcastView = () => {
  return (
    <Box>
      <AppText fontWeight="600" size="2xl">
        Podcasts
      </AppText>
      <AppText c="gray.6">Your favorite podcasts.</AppText>
    </Box>
  )
}
