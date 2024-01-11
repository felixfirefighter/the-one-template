import { Paper, Switch } from '@mantine/core'
import { AppRichListItem, AppText } from '@the-one/ui'
import { DATA } from './data'

export const CookieSettingsCard = () => {
  return (
    <Paper shadow="md" p="lg" withBorder>
      <AppText size="xl" fontWeight="700">
        Cookie Settings
      </AppText>
      <AppText c="gray.6" size="sm" mb="xs">
        Manage your cookie settings
      </AppText>

      {DATA.map((item) => {
        return (
          <AppRichListItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            suffix={<Switch ml={'xs'} />}
          />
        )
      })}
    </Paper>
  )
}
