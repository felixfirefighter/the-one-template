import { Box, Divider, Pill, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { AppSize, AppText } from '@the-one/ui'
import { formatDistance } from 'date-fns'
import { MAILS } from '../../../../app/examples/mail/data'
import { InboxCard } from '../inbox-card'
import styles from './index.module.css'

export const Inbox = () => {
  return (
    <Box flex={1} className={styles.container}>
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

      <Box px="sm" className={styles.mails}>
        {MAILS.map((mail) => {
          return (
            <InboxCard
              key={mail.title}
              header={mail.title}
              title={mail.name}
              description={mail.content}
              rightSection={
                <AppText size="sm" c="gray.6">
                  {formatDistance(mail.date, new Date(), { addSuffix: true })}
                </AppText>
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
