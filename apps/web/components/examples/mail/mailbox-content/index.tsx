import { Box, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export const MailboxContent = () => {
  return (
    <Box flex={1} p="md">
      <TextInput placeholder="Search" leftSection={<IconSearch />}></TextInput>
    </Box>
  )
}
