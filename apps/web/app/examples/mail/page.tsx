'use client'

import { Flex } from '@mantine/core'
import { Inbox } from '../../../components/examples/mail/inbox'
import { MailNavbar } from '../../../components/examples/mail/mail-navbar'
import { MailboxContent } from '../../../components/examples/mail/mailbox-content'

export default function Page(): JSX.Element {
  return (
    <Flex>
      <MailNavbar />
      <Inbox></Inbox>
      <MailboxContent />
    </Flex>
  )
}
