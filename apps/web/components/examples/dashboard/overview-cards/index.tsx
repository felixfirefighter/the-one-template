'use client'

import { Grid } from '@mantine/core'
import { OverviewCard } from '../overview-card'
import { OVERVIEW_CARDS } from './types'

export const OverviewCards = () => {
  return (
    <Grid py={16}>
      {OVERVIEW_CARDS.map((card) => {
        return (
          <Grid.Col key={card.title} span={3}>
            <OverviewCard
              title={card.title}
              text={card.text}
              subtext={card.subtext}
            />
          </Grid.Col>
        )
      })}
    </Grid>
  )
}
