'use client'

import { Paper } from '@mantine/core'
import { MAppSelectItem, MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { DATA } from './data'

export const NotificationCard = () => {
  const [active, setActive] = useState(1)

  return (
    <Paper shadow="md" p="lg" withBorder>
      <MAppText size="xl" fontWeight="700">
        Notifications
      </MAppText>
      <MAppText c="gray.6" size="sm" mb="xs">
        Choose what you want to be notified about
      </MAppText>

      {DATA.map((item) => {
        return (
          <MAppSelectItem
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
