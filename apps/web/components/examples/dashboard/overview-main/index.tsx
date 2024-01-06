'use client'

import { Grid } from '@mantine/core'
import { OverviewChart } from '../overview-chart'
import { OverviewRecentSales } from '../overview-recent-sales'

export const OverviewMain = () => {
  return (
    <Grid grow>
      <Grid.Col span={7}>
        <OverviewChart />
      </Grid.Col>
      <Grid.Col span={5}>
        <OverviewRecentSales />
      </Grid.Col>
    </Grid>
  )
}
