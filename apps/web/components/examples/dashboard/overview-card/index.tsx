import { Box, Paper } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'

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
        <MAppText fontWeight="500">
          {title}
        </MAppText>
      </Box>
      <MAppText size="2xl" fontWeight="700">
        {text}
      </MAppText>
      <MAppText c="gray.8" size="sm">
        {subtext}
      </MAppText>
    </Paper>
  )
}
