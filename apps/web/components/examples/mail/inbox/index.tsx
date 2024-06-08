import { Box, Divider, Pill, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { MAppInboxCard, MAppSize, MAppText } from '@the-one/mantine-ui'
import { formatDistance } from 'date-fns'
import { MAILS } from '../../../../app/examples/mail/data'
import { InboxMail } from '../../../../app/examples/mail/types'
import styles from './index.module.css'

interface Props {
  activeMail: InboxMail
  setActiveMail: (mail: InboxMail) => void
}

export const Inbox: React.FC<Props> = ({ activeMail, setActiveMail }) => {
  return (
    <Box flex={1} className={styles.container}>
      <Box p="sm">
        <MAppText fontWeight="700" size="2xl">
          Inbox
        </MAppText>
      </Box>

      <Divider />

      <Box p="sm">
        <TextInput
          placeholder="Search"
          leftSection={<IconSearch size={MAppSize['4xl']} />}
        ></TextInput>
      </Box>

      <Box px="sm" className={styles.mails}>
        {MAILS.map((mail) => {
          return (
            <MAppInboxCard
              key={mail.title}
              header={mail.title}
              title={mail.name}
              description={mail.content}
              active={activeMail.title === mail.title}
              onClick={() => setActiveMail(mail)}
              rightSection={
                <MAppText size="sm" c="gray.6">
                  {formatDistance(mail.date, new Date(), { addSuffix: true })}
                </MAppText>
              }
              bottomSection={
                <>
                  {mail.labels.map((label) => {
                    return (
                      <Pill radius={'sm'} mr={'xs'} key={label.label}>
                        {label.label}
                      </Pill>
                    )
                  })}
                </>
              }
            />
          )
        })}
      </Box>
    </Box>
  )
}
