import {
  IconArchive,
  IconClock,
  IconCornerUpLeft,
  IconCornerUpLeftDouble,
  IconCornerUpRight,
  IconTrash,
} from '@tabler/icons-react'
import { MAppIconStroke } from '@the-one/mantine-ui'

export const LEFT_ACTION_BUTTONS = [
  {
    label: 'Archive',
    icon: <IconArchive stroke={MAppIconStroke.md} />,
  },
  {
    label: 'Move to trash',
    icon: <IconTrash stroke={MAppIconStroke.md} />,
  },
  {
    label: 'Snooze',
    icon: <IconClock stroke={MAppIconStroke.md} />,
  },
]

export const RIGHT_ACTION_BUTTONS = [
  {
    label: 'Reply',
    icon: <IconCornerUpLeft stroke={MAppIconStroke.md} />,
  },
  {
    label: 'Reply all',
    icon: <IconCornerUpLeftDouble stroke={MAppIconStroke.md} />,
  },
  {
    label: 'Forward',
    icon: <IconCornerUpRight stroke={MAppIconStroke.md} />,
  },
]

export const MENU_ITEMS = [
  {
    label: 'Mark as unread'
  },
  {
    label: 'Star thread'
  },
  {
    label: 'Add label'
  },
  {
    label: 'Mute thread'
  },
]
