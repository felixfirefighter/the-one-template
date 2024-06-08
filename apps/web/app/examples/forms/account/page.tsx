'use client'

import {
  Box,
  Button,
  Container,
  Divider,
  Select,
  TextInput,
} from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { LANGUAGES } from './data'

export default function Page(): JSX.Element {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null)

  return (
    <Container size={'sm'} m={0}>
      <MAppText size="lg" fontWeight="600">
        Account
      </MAppText>
      <MAppText c="gray.6" size="sm">
        Update your account settings, set your preferred language and timezone.
      </MAppText>

      <Divider my={'lg'}></Divider>

      <TextInput
        placeholder="John Doe"
        label="Name"
        description="This is the name that will be displayed on your profile and emails"
        mb={'lg'}
      ></TextInput>

      <DatePickerInput
        description="Your date of birth is used to calculate your age"
        mb={'lg'}
        label="Date of birth"
        value={dateOfBirth}
        onChange={setDateOfBirth}
        placeholder="Date of birth"
      ></DatePickerInput>

      <Select
        description="This is the language that will be used in the dashboard"
        data={LANGUAGES}
        mb="lg"
        label="Language"
        placeholder="Select language"
      ></Select>

      <Box py={'xl'}>
        <Button>Update account</Button>
      </Box>
    </Container>
  )
}
