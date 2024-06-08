'use client'

import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Radio,
  Switch,
} from '@mantine/core'
import { MAppRichListItem, MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { EMAIL_NOTIFICATIONS, NOTIFICATIONS } from './data'

export default function Page(): JSX.Element {
  const [notification, setNotification] = useState('direct')

  const [emailNotifications, setEmailNotifications] =
    useState(EMAIL_NOTIFICATIONS)

  return (
    <Container size={'sm'} m={0}>
      <MAppText size="lg" fontWeight="600">
        Notifications
      </MAppText>
      <MAppText c="gray.6" size="sm">
        Configure how you receive notifications
      </MAppText>

      <Divider my={'lg'}></Divider>

      <MAppText size="md" fontWeight="500">
        Notify me about:
      </MAppText>
      <Radio.Group
        onChange={(e) => setNotification(e)}
        value={notification}
        mb={'xl'}
      >
        {NOTIFICATIONS.map((notification) => {
          return (
            <Radio
              key={notification.value}
              value={notification.value}
              label={notification.label}
              my="xs"
            ></Radio>
          )
        })}
      </Radio.Group>

      <MAppText size="md" fontWeight="500">
        Email Notifications
      </MAppText>

      {emailNotifications.map((notification) => {
        return (
          <Paper key={notification.label} withBorder px={'md'} my={'xs'} shadow='none'>
            <MAppRichListItem
              title={notification.label}
              subtitle={notification.description}
              suffix={
                <Switch
                  checked={notification.value}
                  onChange={(e) => {
                    setEmailNotifications(
                      emailNotifications.map((n) => {
                        if (n.label === notification.label) {
                          return { ...n, value: e.target.checked }
                        }

                        return n
                      }),
                    )
                  }}
                ></Switch>
              }
            ></MAppRichListItem>
          </Paper>
        )
      })}

      <Box py={'xl'}>
        <Button>Update notifications</Button>
      </Box>
    </Container>
  )
}
