'use client'

import { Grid } from '@mantine/core'
import { CreateAccountCard } from '../create-account-card'

export const CardGrid = () => {
  return (
    <Grid gutter={'lg'}>
      <Grid.Col span={4}>
        <CreateAccountCard />
      </Grid.Col>
      <Grid.Col span={4}>
        <CreateAccountCard />
      </Grid.Col>
      <Grid.Col span={4}>
        <CreateAccountCard />
      </Grid.Col>
    </Grid>
  )
}
