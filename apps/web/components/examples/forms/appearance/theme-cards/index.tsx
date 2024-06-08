import { Grid, useMantineColorScheme } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { ThemeCard } from '../theme-card'

export const ThemeCards = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme()

  return (
    <>
      <MAppText size="sm" fontWeight="500">
        Theme
      </MAppText>
      <MAppText size="xs" c="gray.6">
        Select the theme for the dashboard
      </MAppText>
      <Grid>
        <Grid.Col span={4}>
          <ThemeCard
            active={colorScheme === 'light'}
            theme="light"
            onClick={() => setColorScheme('light')}
          ></ThemeCard>
        </Grid.Col>
        <Grid.Col span={4}>
          <ThemeCard
            active={colorScheme === 'dark'}
            theme="dark"
            onClick={() => setColorScheme('dark')}
          ></ThemeCard>
        </Grid.Col>
      </Grid>
    </>
  )
}
