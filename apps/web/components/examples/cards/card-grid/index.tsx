'use client'

import { Grid, Space } from '@mantine/core'
import { CreateAccountCard } from '../create-account-card'
import { PaymentMethodCard } from '../payment-method-card'

export const CardGrid = () => {
  return (
    <Grid gutter={'lg'}>
      <Grid.Col span={4}>
        <CreateAccountCard />
        <Space h={'lg'} />
        <PaymentMethodCard />
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
