'use client'

import { Button, Flex, Paper, Select, TextInput } from '@mantine/core'
import { MAppSimpleSelectCard, MAppSize, MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { DATA, MONTHS } from './data'

export const PaymentMethodCard = () => {
  const [active, setActive] = useState(1)

  const years = Array.from({ length: 20 }, (_, i) => {
    const year = new Date().getFullYear() - i
    return {
      label: year.toString(),
      value: year.toString(),
    }
  })

  return (
    <Paper shadow="md" p="lg" withBorder>
      <MAppText size="xl" fontWeight="700">
        Payment Method
      </MAppText>
      <MAppText c="gray.6" size="sm" mb='xs'>
        Add a new payment method to your account
      </MAppText>

      <Flex
        justify={'space-between'}
        py={MAppSize['3xl']}
        gap={MAppSize['2xl']}
      >
        {DATA.map((item) => {
          return (
            <MAppSimpleSelectCard
              active={active === item.id}
              key={item.title}
              flex={1}
              title={item.title}
              icon={item.icon}
              onClick={() => setActive(item.id)}
            />
          )
        })}
      </Flex>
      <TextInput
        py={MAppSize.md}
        label="Name"
        placeholder="John Doe"
      ></TextInput>

      <Flex gap={'md'} py={MAppSize.md}>
        <TextInput flex={3} type="number" placeholder='1234123412341234' label="Card number"></TextInput>
        <TextInput flex={1} type="number" placeholder='565' label="CVC"></TextInput>
      </Flex>

      <Flex gap={'md'} py={MAppSize.md}>
        <Select label="Expiration" placeholder="Month" data={MONTHS}></Select>
        <Select label=" " placeholder="Year" data={years}></Select>
      </Flex>

      <Button fullWidth mt={MAppSize['3xl']}>
        Continue
      </Button>
    </Paper>
  )
}
