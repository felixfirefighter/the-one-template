'use client'

import { Box, Button, Checkbox, Container, Divider } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { useState } from 'react'
import { SIDEBAR_DISPLAYS } from './data'

export default function Page(): JSX.Element {
  const [sidebarDisplays, setSidebarDisplays] = useState(SIDEBAR_DISPLAYS)

  return (
    <Container size={'sm'} m={0}>
      <AppText size="lg" fontWeight="600">
        Display
      </AppText>
      <AppText c="gray.6" size="sm">
        Turn items on or off to control what's displayed in the app
      </AppText>

      <Divider my={'lg'}></Divider>

      <AppText size="md" fontWeight="500">
        Sidebar
      </AppText>
      <AppText c="gray.6" size="sm" mb={'sm'}>
        Select the items you want to display in the sidebar
      </AppText>

      {sidebarDisplays.map((display) => {
        return (
          <Checkbox
            label={display.label}
            checked={display.value}
            mb={'xs'}
            onChange={(e) =>
              setSidebarDisplays(
                sidebarDisplays.map((d) => {
                  if (d.label === display.label) {
                    return { ...d, value: e.target.checked }
                  }

                  return d
                }),
              )
            }
          ></Checkbox>
        )
      })}

      <Box py={'xl'}>
        <Button>Update display</Button>
      </Box>
    </Container>
  )
}
