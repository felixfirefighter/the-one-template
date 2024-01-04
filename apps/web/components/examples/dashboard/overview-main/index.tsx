'use client'

import { Grid } from '@mantine/core'
import { OverviewChart } from '../overview-chart'

export const OverviewMain = () => {
  return (
    <Grid>
      <Grid.Col span={8}>
        <OverviewChart />
      </Grid.Col>
      <Grid.Col span={4}></Grid.Col>
    </Grid>
  )
}
