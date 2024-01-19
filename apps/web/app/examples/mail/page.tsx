'use client'

import { Box, Flex, NavLink } from '@mantine/core'
import { AppWidth } from '@the-one/ui'
import { MailNavbar } from '../../../components/examples/mail/mail-navbar'

export default function Page(): JSX.Element {
  return (
    <Flex>
      <MailNavbar />
      <Box>Inbox</Box>
    </Flex>
  )
}
