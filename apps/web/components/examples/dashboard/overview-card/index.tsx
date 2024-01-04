import { Box, Paper } from '@mantine/core'
import { AppText } from '@the-one/ui'

interface Props {
  title: string
  text: string
  subtext: string
}

export const OverviewCard: React.FC<Props> = ({
  title,
  text,
  subtext,
}) => {
  return (
    <Paper radius={'lg'} shadow='sm' p={24} withBorder>
      <Box mb={4}>
        <AppText fontWeight="500">
          {title}
        </AppText>
      </Box>
      <AppText size="2xl" fontWeight="700">
        {text}
      </AppText>
      <AppText c="gray.8" size="sm">
        {subtext}
      </AppText>
    </Paper>
  )
}
