'use client'

import { Flex } from '@mantine/core'
import { useState } from 'react'
import { Inbox } from '../../../components/examples/mail/inbox'
import { MailNavbar } from '../../../components/examples/mail/mail-navbar'
import { MailboxContent } from '../../../components/examples/mail/mailbox-content'
import { InboxMail } from './types'
import { MAILS } from './data'

export default function Page(): JSX.Element {
  const [activeMail, setActiveMail] = useState<InboxMail>(MAILS[0]!)

  return (
    <Flex>
      <MailNavbar />
      <Inbox
        activeMail={activeMail}
        setActiveMail={(mail) => setActiveMail(mail)}
      ></Inbox>
      <MailboxContent activeMail={activeMail} />
    </Flex>
  )
}
