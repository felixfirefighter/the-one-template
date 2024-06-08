import { BarChart } from '@mantine/charts'
import { Paper, useMantineTheme } from '@mantine/core'
import { MAppSize, MAppText } from '@the-one/mantine-ui'
import { DATA } from './data'

export const OverviewChart = () => {
  const theme = useMantineTheme()

  return (
    <Paper radius={'lg'} shadow="sm" p={MAppSize['5xl']} withBorder>
      <MAppText fontWeight="500" size="lg" mb={MAppSize['2xl']}>
        Overview
      </MAppText>
      <BarChart
        h={310}
        data={DATA}
        dataKey="month"
        series={[{ name: 'Total', color: theme.primaryColor }]}
        tickLine="y"
      />
    </Paper>
  )
}
