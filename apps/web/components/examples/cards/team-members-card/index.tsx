import { Avatar, Paper, Select } from '@mantine/core'
import { AppRichListItem, AppText } from '@the-one/ui'
import { DATA, ROLES } from './data'
import { useState } from 'react'

export const TeamMembersCard = () => {

  const [users, setUsers] = useState(DATA)

  return (
    <Paper shadow="md" p="lg" withBorder>
      <AppText size="xl" fontWeight="700">
        Team members
      </AppText>
      <AppText c="gray.6" size="sm" mb='xs'>
        Invite your team members to collaborate
      </AppText>

      {users.map((item) => {
        return (
          <AppRichListItem
            key={item.username}
            prefix={<Avatar src={item.img} mr='xs' />}
            title={item.username}
            subtitle={item.email}
            suffix={<Select w={110} data={ROLES} value={item.role} onChange={(role) => {
              const newUsers = users.map(user => {
                if(role && item.username === user.username) {
                  return {
                    ...item,
                    role
                  }
                }

                return user
              })

              setUsers(newUsers)
            }}></Select>}
          />
        )
      })}
    </Paper>
  )
}
