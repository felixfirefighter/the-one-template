import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  Textarea,
  Tooltip,
} from '@mantine/core'
import { IconDotsVertical } from '@tabler/icons-react'
import { AppIconStroke, AppProfileLogo, AppText } from '@the-one/ui'
import { format } from 'date-fns'
import { InboxMail } from '../../../../app/examples/mail/types'
import { LEFT_ACTION_BUTTONS, MENU_ITEMS, RIGHT_ACTION_BUTTONS } from './data'
import styles from './index.module.css'
interface Props {
  activeMail: InboxMail
}

export const MailboxContent: React.FC<Props> = ({ activeMail }) => {
  return (
    <Flex flex={1} direction={'column'}>
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

          <Divider orientation="vertical" />

          <Menu position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="subtle" size={'md'} ml={'xs'}>
                <IconDotsVertical stroke={AppIconStroke.md} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              {MENU_ITEMS.map((item) => {
                return <Menu.Item key={item.label}>{item.label}</Menu.Item>
              })}
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Flex>

      <Divider />

      <Box p="sm">
        <Flex justify={'space-between'}>
          <Flex>
            <AppProfileLogo username={activeMail.name}></AppProfileLogo>

            <Box mx={'xs'}>
              <AppText size="sm" fontWeight="700">
                {activeMail.name}
              </AppText>
              <AppText size="sm" c="gray.7">
                {activeMail.title}
              </AppText>
            </Box>
          </Flex>

          <AppText size="sm" c="gray.6">
            {format(activeMail.date, 'PPpp')}
          </AppText>
        </Flex>
      </Box>

      <Divider />

      <Box p="sm" flex={1} className={styles.content}>
        <AppText size="sm" style={{ whiteSpace: 'pre-wrap' }}>
          {activeMail.content}
        </AppText>
      </Box>
              
      <Divider />

      <Box p="sm" ta='right'>
        <Textarea rows={4} mb={'xs'} placeholder={`Reply ${activeMail.name}`}></Textarea>
        <Button ta={'right'}>Send</Button>
      </Box>
    </Flex>
  )
}
