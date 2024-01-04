'use client'

import { Paper, useMantineTheme } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import { DATA } from './types'

export const OverviewChart = () => {
  const theme = useMantineTheme()
  return (
    <Paper radius={'lg'} shadow="sm" p={24} withBorder>
      <AppText fontWeight='500'>Overview</AppText>
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart data={DATA}>
          <Bar dataKey="value" fill={theme.colors.dark[7]} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  )
}
