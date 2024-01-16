'use client'

import { Box, Button, Container, Divider, Select } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { useState } from 'react'
import { FONTS } from './data'

export default function Page(): JSX.Element {
  const [font, setFont] = useState('inter')

  return (
    <Container size={'sm'} m={0}>
      <AppText size="lg" fontWeight="600">
        Appearance
      </AppText>
      <AppText c="gray.6" size="sm">
        Customize the appearance of the app including font and theme.
      </AppText>

      <Divider my={'lg'}></Divider>

      <Select
        data={FONTS}
        label="Font"
        description="Set the font you want to use in the dashboard"
        value={font}
        onChange={(value) => {
          if (value) {
            setFont(value)
          }
        }}
      ></Select>

      <Box py={'xl'}>
        <Button>Update appearance</Button>
      </Box>
    </Container>
  )
}
