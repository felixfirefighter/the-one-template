import { IconAlertCircle, IconArchive, IconFile, IconInbox, IconSend, IconTrash, IconUsersGroup } from '@tabler/icons-react'

export const NAV_LINKS = [
  {
    label: 'Inbox',
    icon: <IconInbox stroke={1} />,
    count: 255,
    active: true,
  },
  {
    label: 'Drafts',
    icon: <IconFile stroke={1} />,
    count: 5,
    active: false,
  },
  {
    label: 'Sent',
    icon: <IconSend stroke={1} />,
    active: false,
  },
  {
    label: 'Trash',
    icon: <IconTrash stroke={1} />,
    active: false,
  },
  {
    label: 'Archive',
    icon: <IconArchive stroke={1} />,
    active: false,
  },
]

export const GROUP_LINKS = [
  {
    label: 'Social',
    icon: <IconUsersGroup stroke={1} />,
    active: false
  },
  {
    label: 'Updates',
    icon: <IconAlertCircle stroke={1} />,
    active: false
  },
]