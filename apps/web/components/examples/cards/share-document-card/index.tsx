import {
  Button,
  CopyButton,
  Flex,
  Paper,
  Select,
  TextInput,
} from '@mantine/core'
import { AppRichListItem, AppText } from '@the-one/ui'
import { useState } from 'react'
import { DATA, PERMISSIONS } from './data'

export const ShareDocumentCard = () => {
  const [users, setUsers] = useState(DATA)

  return (
    <Paper shadow="md" p="lg" withBorder>
      <AppText size="xl" fontWeight="700">
        Share document
      </AppText>
      <AppText c="gray.6" size="sm" mb="xs">
        Anyone with the link can view this document
      </AppText>

      <Flex gap="xs" my={'lg'}>
        <TextInput
          flex={1}
          value="https://example.com/link/to/document/"
          readOnly
        />
        <CopyButton value="https://example.com/link/to/document/">
          {({ copied, copy }) => (
            <Button variant="filled" w={120} onClick={copy}>
              {copied ? 'Copied' : 'Copy Link'}
            </Button>
          )}
        </CopyButton>
      </Flex>

      <AppText size="sm" fontWeight="500" mb="xs">
        People with access
      </AppText>
      {users.map((item) => {
        return (
          <AppRichListItem
            key={item.username}
            avatarSrc={item.img}
            title={item.username}
            subtitle={item.email}
            suffix={
              <Select
                w={110}
                data={PERMISSIONS}
                value={item.permission}
                onChange={(permission) => {
                  const newUsers = users.map((user) => {
                    if (permission && item.username === user.username) {
                      return {
                        ...item,
                        permission,
                      }
                    }

                    return user
                  })

                  setUsers(newUsers)
                }}
              ></Select>
            }
          />
        )
      })}
    </Paper>
  )
}
