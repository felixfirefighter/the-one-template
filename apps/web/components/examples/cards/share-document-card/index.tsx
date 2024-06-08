import {
  Avatar,
  Button,
  CopyButton,
  Flex,
  Paper,
  Select,
  TextInput,
} from '@mantine/core'
import { MAppRichListItem, MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { DATA, PERMISSIONS } from './data'

export const ShareDocumentCard = () => {
  const [users, setUsers] = useState(DATA)

  return (
    <Paper shadow="md" p="lg" withBorder>
      <MAppText size="xl" fontWeight="700">
        Share document
      </MAppText>
      <MAppText c="gray.6" size="sm" mb="xs">
        Anyone with the link can view this document
      </MAppText>

      <Flex gap="xs" my={'lg'}>
        <TextInput
          flex={1}
          value="https://example.com/link/to/document/"
          readOnly
        />
        <CopyButton value="https://example.com/link/to/document/">
          {({ copied, copy }) => (
            <Button variant="filled" w={110} onClick={copy}>
              {copied ? 'Copied' : 'Copy Link'}
            </Button>
          )}
        </CopyButton>
      </Flex>

    <MAppText size="sm" fontWeight="500" mb="xs">
        People with access
      </MAppText>
      {users.map((item) => {
        return (
          <MAppRichListItem
            key={item.username}
            prefix={<Avatar src={item.img} mr='xs' />}
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
