import { Box, Flex, SegmentedControl } from '@mantine/core'
import { AppText } from '@the-one/ui'

export const metadata = {
  title: 'Dashboard - The One',
}

export default function Page(): JSX.Element {
  return (
    <Box p={'md'}>
      <Flex mb={'sm'} justify={'space-between'}>
        <AppText size="3xl" fontWeight="700">
          Dashboard
        </AppText>
      </Flex>
      <SegmentedControl data={['Overview', 'Analytics', 'Report']} />
    </Box>
  )
}
