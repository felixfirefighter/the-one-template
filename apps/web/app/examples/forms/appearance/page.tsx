'use client'

import { Box, Button, Container, Divider, Select } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { ThemeCards } from '../../../../components/examples/forms/appearance/theme-cards'
import { FONTS } from './data'

export default function Page(): JSX.Element {
  const [font, setFont] = useState('inter')

  return (
    <Container size={'sm'} m={0}>
      <MAppText size="lg" fontWeight="600">
        Appearance
      </MAppText>
      <MAppText c="gray.6" size="sm">
        Customize the appearance of the app including font and theme.
      </MAppText>

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
        mb={'lg'}
      ></Select>

      <ThemeCards />

      <Box py={'xl'}>
        <Button>Update appearance</Button>
      </Box>
    </Container>
  )
}
