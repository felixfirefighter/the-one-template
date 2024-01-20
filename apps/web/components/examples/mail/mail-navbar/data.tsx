import {
  IconAlertCircle,
  IconArchive,
  IconBrandGoogleFilled,
  IconCloudFilled,
  IconFile,
  IconInbox,
  IconMessage,
  IconSend,
  IconShoppingCart,
  IconTicket,
  IconTrash,
  IconTriangleFilled,
  IconUsersGroup,
} from '@tabler/icons-react'
import { AppSize } from '@the-one/ui'

export const ACCOUNTS = [
  {
    label: 'johndoe@theone.com',
    value: 'johndoe@theone.com',
    icon: <IconTriangleFilled size={AppSize['4xl']} />,
  },
  {
    label: 'johndoe@gmail.com',
    value: 'johndoe@gmail.com',
    icon: <IconBrandGoogleFilled size={AppSize['4xl']} />,
  },
  {
    label: 'johndoe@icloud.com',
    value: 'johndoe@icloud.com',
    icon: <IconCloudFilled size={AppSize['4xl']} />,
  },
]

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
    count: 981,
    active: false,
  },
  {
    label: 'Updates',
    icon: <IconAlertCircle stroke={1} />,
    count: 51,
    active: false,
  },
  {
    label: 'Forums',
    icon: <IconMessage stroke={1} />,
    count: 139,
    active: false,
  },
  {
    label: 'Shopping',
    icon: <IconShoppingCart stroke={1} />,
    count: 7,
    active: false,
  },
  {
    label: 'Promotions',
    icon: <IconTicket stroke={1} />,
    active: false,
  },
]
