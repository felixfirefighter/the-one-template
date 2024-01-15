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
import { AppText } from '@the-one/ui'
import { useState } from 'react'
import { LANGUAGES } from './data'

export default function Page(): JSX.Element {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null)

  return (
    <Container size={'sm'} m={0}>
      <AppText size="lg" fontWeight="600">
        Account
      </AppText>
      <AppText c="gray.6" size="sm">
        Update your account settings, set your preferred language and timezone.
      </AppText>

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
