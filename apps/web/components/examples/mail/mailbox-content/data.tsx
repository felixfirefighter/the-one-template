import {
  IconArchive,
  IconClock,
  IconCornerUpLeft,
  IconCornerUpLeftDouble,
  IconCornerUpRight,
  IconTrash,
} from '@tabler/icons-react'
import { AppIconStroke } from '@the-one/ui'

export const LEFT_ACTION_BUTTONS = [
  {
    label: 'Archive',
    icon: <IconArchive stroke={AppIconStroke.md} />,
  },
  {
    label: 'Move to trash',
    icon: <IconTrash stroke={AppIconStroke.md} />,
  },
  {
    label: 'Snooze',
    icon: <IconClock stroke={AppIconStroke.md} />,
  },
]

export const RIGHT_ACTION_BUTTONS = [
  {
    label: 'Reply',
    icon: <IconCornerUpLeft stroke={AppIconStroke.md} />,
  },
  {
    label: 'Reply all',
    icon: <IconCornerUpLeftDouble stroke={AppIconStroke.md} />,
  },
  {
    label: 'Forward',
    icon: <IconCornerUpRight stroke={AppIconStroke.md} />,
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
