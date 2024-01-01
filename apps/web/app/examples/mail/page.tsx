import { Box, Flex, SegmentedControl } from '@mantine/core'
import { AppText } from '@the-one/ui'

export const metadata = {
  title: 'Mail - The One',
}

export default function Page(): JSX.Element {
  return (
    <Box p={'md'}>
      <Flex mb={'sm'} justify={'space-between'}>
        <AppText size="3xl" fontWeight="700">
          Mail
        </AppText>
      </Flex>
      <SegmentedControl data={['Overview', 'Analytics', 'Report']} />
    </Box>
  )
}
