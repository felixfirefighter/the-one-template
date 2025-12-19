'use client'

import { Paper, Switch } from '@mantine/core'
import { MAppRichListItem, MAppText } from '@the-one/mantine-ui'
import { DATA } from './data'

export const CookieSettingsCard = () => {
  return (
    <Paper shadow="md" p="lg" withBorder>
      <MAppText size="xl" fontWeight="700">
        Cookie Settings
      </MAppText>
      <MAppText c="gray.6" size="sm" mb="xs">
        Manage your cookie settings
      </MAppText>

      {DATA.map((item) => {
        return (
          <MAppRichListItem
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
