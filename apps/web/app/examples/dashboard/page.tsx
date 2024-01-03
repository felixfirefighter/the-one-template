import { Container, Flex, SegmentedControl } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { OverviewCards } from '../../../components/dashboard/overview-cards'
import { OVERVIEW_SEGMENTS } from './types'
import { OverviewMain } from '../../../components/dashboard/overview-main'

export const metadata = {
  title: 'Dashboard - The One',
}

export default function Page(): JSX.Element {
  return (
    <Container size={'xl'} p={'md'}>
      <Flex mb={'sm'} justify={'space-between'}>
        <AppText size="3xl" fontWeight="700">
          Dashboard
        </AppText>
      </Flex>

      <SegmentedControl data={OVERVIEW_SEGMENTS} />
      <OverviewCards />
      <OverviewMain />

    </Container>
  )
}
