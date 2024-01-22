import { ActionIcon, Box, Divider, Flex, Menu, Tooltip } from '@mantine/core'
import { InboxMail } from '../../../../app/examples/mail/types'
import { LEFT_ACTION_BUTTONS, MENU_ITEMS, RIGHT_ACTION_BUTTONS } from './data'
import { IconDots, IconDotsVertical } from '@tabler/icons-react'
import { AppIconStroke } from '@the-one/ui'

interface Props {
  activeMail: InboxMail
}

export const MailboxContent: React.FC<Props> = ({ activeMail }) => {
  return (
    <Box flex={1}>
      <Flex p="sm" justify={'space-between'}>
        <Flex py={4}>
          {LEFT_ACTION_BUTTONS.map((button) => {
            return (
              <Tooltip label={button.label} key={button.label}>
                <ActionIcon variant="subtle" size={'md'} mr={'xs'}>
                  {button.icon}
                </ActionIcon>
              </Tooltip>
            )
          })}
        </Flex>

        <Flex py={4}>
          {RIGHT_ACTION_BUTTONS.map((button) => {
            return (
              <Tooltip label={button.label} key={button.label}>
                <ActionIcon variant="subtle" size={'md'} mr={'xs'}>
                  {button.icon}
                </ActionIcon>
              </Tooltip>
            )
          })}

          <Divider orientation='vertical' />

          <Menu position='bottom-end'>
            <Menu.Target>
              <ActionIcon variant='subtle' size={'md'} ml={'xs'}>
                <IconDotsVertical stroke={AppIconStroke.md}/>
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              {MENU_ITEMS.map((item) => {
                return (
                  <Menu.Item key={item.label}>
                    {item.label}
                  </Menu.Item>
                )
              })}
            </Menu.Dropdown> 
          </Menu>
        </Flex>
      </Flex>

      <Divider />
    </Box>
  )
}
