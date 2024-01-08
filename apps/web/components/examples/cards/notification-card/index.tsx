import { Paper } from '@mantine/core'
import { AppSelectItem, AppText } from '@the-one/ui'
import { useState } from 'react'
import { DATA } from './data'

export const NotificationCard = () => {
  const [active, setActive] = useState(1)

  return (
    <Paper shadow="md" p="lg" withBorder>
      <AppText size="xl" fontWeight="700">
        Notifications
      </AppText>
      <AppText c="gray.6" size="sm" mb="xs">
        Choose what you want to be notified about
      </AppText>

      {DATA.map((item) => {
        return (
          <AppSelectItem
            key={item.id}
            prefix={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            selected={active === item.id}
            onClick={() => setActive(item.id)}
          />
        )
      })}
    </Paper>
  )
}
