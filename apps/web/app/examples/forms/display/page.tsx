'use client'

import { Box, Button, Checkbox, Container, Divider } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { SIDEBAR_DISPLAYS } from './data'

export default function Page(): JSX.Element {
  const [sidebarDisplays, setSidebarDisplays] = useState(SIDEBAR_DISPLAYS)

  return (
    <Container size={'sm'} m={0}>
      <MAppText size="lg" fontWeight="600">
        Display
      </MAppText>
      <MAppText c="gray.6" size="sm">
        Turn items on or off to control what's displayed in the app
      </MAppText>

      <Divider my={'lg'}></Divider>

      <MAppText size="md" fontWeight="500">
        Sidebar
      </MAppText>
      <MAppText c="gray.6" size="sm" mb={'sm'}>
        Select the items you want to display in the sidebar
      </MAppText>

      {sidebarDisplays.map((display) => {
        return (
          <Checkbox
            key={display.label}
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
