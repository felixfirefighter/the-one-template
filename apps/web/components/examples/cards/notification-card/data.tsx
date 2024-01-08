import { IconBell, IconEyeClosed, IconUser } from '@tabler/icons-react'

export const DATA = [
  {
    id: 1,
    icon: <IconBell stroke={1} />,
    title: 'Everything',
    subtitle: 'Email digest, mentions & all activity',
  },
  {
    id: 2,
    icon: <IconUser stroke={1} />,
    title: 'Available',
    subtitle: 'Only mentions and comments',
  },
  {
    id: 3,
    icon: <IconEyeClosed stroke={1} />,
    title: 'Mute',
    subtitle: 'Turn off all notifications',
  },
]
