'use client'

import { Button, Flex, Paper, Select, TextInput, Textarea } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { PRIORITIES, TYPES } from './data'

export const ReportIssueCard = () => {
  const [type, setType] = useState('account')
  const [priority, setPriority] = useState('low')

  return (
    <Paper shadow="md" p="lg" withBorder>
      <MAppText size="xl" fontWeight="700">
        Report an issue
      </MAppText>
      <MAppText c="gray.6" size="sm" mb="xs">
        What area are you having problems with?
      </MAppText>

      <Flex mb="xs" gap={'lg'}>
        <Select
          label="Type"
          data={TYPES}
          value={type}
          onChange={(value) => {
            if (value) {
              setType(value)
            }
          }}
        ></Select>

        <Select
          label="Priority"
          data={PRIORITIES}
          value={priority}
          onChange={(value) => {
            if (value) {
              setPriority(value)
            }
          }}
        ></Select>
      </Flex>

      <TextInput
        mb={'xs'}
        label="Subject"
        placeholder="I need help with.."
      ></TextInput>

      <Textarea
        label="Description"
        placeholder="Please include all information relevant to your issue."
        mb={'xs'}
      />

      <Flex mt={'lg'} justify={'space-between'}>
        <Button variant="subtle">Cancel</Button>
        <Button>Continue</Button>
      </Flex>
    </Paper>
  )
}
