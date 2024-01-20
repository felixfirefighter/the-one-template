import { Box, Chip, Divider, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { AppSize, AppText } from '@the-one/ui'
import { MAILS } from '../../../../app/examples/mail/data'
import { InboxCard } from '../inbox-card'
import { format, formatRelative } from 'date-fns'

export const Inbox = () => {
  return (
    <Box flex={1}>
      <Box p="sm">
        <AppText fontWeight="700" size="2xl">
          Inbox
        </AppText>
      </Box>

      <Divider />

      <Box p="sm">
        <TextInput
          placeholder="Search"
          leftSection={<IconSearch size={AppSize['4xl']} />}
        ></TextInput>
      </Box>

      {MAILS.map((mail) => {
        return (
          <InboxCard
            key={mail.title}
            header={mail.name}
            title={mail.title}
            description={mail.content}
            rightSection={<AppText>{formatRelative(mail.date, new Date())}</AppText>}
            bottomSection={
              <>
                {mail.labels.map((label) => {
                  return <Chip key={label.label}>{label.label}</Chip>
                })}
              </>
            }
          />
        )
      })}
    </Box>
  )
}
