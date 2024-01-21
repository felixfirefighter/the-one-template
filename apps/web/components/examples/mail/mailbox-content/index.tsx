import { Box } from '@mantine/core'
import { InboxMail } from '../../../../app/examples/mail/types'

interface Props {
  activeMail: InboxMail
}

export const MailboxContent: React.FC<Props> = ({ activeMail }) => {
  return (
    <Box flex={1} p="md">
      {activeMail.content}
    </Box>
  )
}
