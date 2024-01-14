import { BarChart } from '@mantine/charts'
import { Paper, useMantineTheme } from '@mantine/core'
import { AppSize, AppText } from '@the-one/ui'
import { DATA } from './data'

export const OverviewChart = () => {
  const theme = useMantineTheme()

  return (
    <Paper radius={'lg'} shadow="sm" p={AppSize['5xl']} withBorder>
      <AppText fontWeight="500" size="lg" mb={AppSize['2xl']}>
        Overview
      </AppText>
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
