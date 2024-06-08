import { IconCheck, IconMicrophone2, IconWorld } from '@tabler/icons-react'
import { MAppSize } from '@the-one/mantine-ui'
import { HeaderProps } from './types'

export const HEADERS: HeaderProps[] = [
  {
    title: 'Music',
    isBold: true,
    items: [
      {
        title: 'About Music',
        hasDivider: true,
      },
      {
        title: 'Preferences...',
        subText: '⇧⌘',
        hasDivider: true,
      },
      {
        title: 'Hide Music...',
        subText: '⌘H',
      },
      {
        title: 'Hide Others...',
        subText: '⇧⌘H',
      },
      {
        title: 'Quit Music',
        subText: '⌘Q',
      },
    ],
  },
  {
    title: 'File',
    items: [
      {
        title: 'New',
        items: [
          {
            title: 'Playlist',
            subText: '⌘N',
          },
          {
            title: 'Playlist from Selection',
            subText: '⇧⌘N',
            disabled: true,
          },
          {
            title: 'Smart Playlist',
            subText: '⌥⌘N',
          },
          {
            title: 'Playlist Folder',
          },
          {
            title: 'Genius Playlist',
            disabled: true,
          },
        ],
      },
      {
        title: 'Open Stream URL...',
        subText: '⌘U',
      },
      {
        title: 'Close Window',
        subText: '⌘W',
        hasDivider: true,
      },
      {
        title: 'Library',
        items: [
          {
            title: 'Update Cloud Library',
          },
          {
            title: 'Update Genius',
            hasDivider: true,
          },
          {
            title: 'Organize Library...',
          },
          {
            title: 'Export Library...',
            disabled: true,
          },
          {
            title: 'Show Duplicate Items',
            hasDivider: true,
          },
          {
            title: 'Get Album Artwork',
          },
          {
            title: 'Get Track Names',
            disabled: true,
          },
        ],
      },
      {
        title: 'Import...',
        subText: '⌘O',
      },
      {
        title: 'Burn Playlist to Disc...',
        disabled: true,
        hasDivider: true,
      },
      {
        title: 'Show in Finder',
        subText: '⇧⌘R',
      },
      {
        title: 'Convert',
        hasDivider: true,
      },
      {
        title: 'Page Setup...',
      },
      {
        title: 'Print...',
        disabled: true,
      },
    ],
  },
  {
    title: 'Edit',
    items: [
      {
        title: 'Undo',
        subText: '⌘Z',
        disabled: true,
      },
      {
        title: 'Redo',
        subText: '⇧⌘Z',
        disabled: true,
        hasDivider: true,
      },
      {
        title: 'Cut',
        subText: '⌘X',
      },
      {
        title: 'Copy',
        subText: '⌘C',
        disabled: true,
      },
      {
        title: 'Paste',
        subText: '⌘V',
        disabled: true,
      },
      {
        title: 'Select All',
        subText: '⌘A',
      },
      {
        title: 'Deselect All',
        subText: '⇧⌘A',
        hasDivider: true,
      },
      {
        title: 'Smart Dictation',
        subText: <IconMicrophone2 stroke={1.5} size={MAppSize['4xl']} />,
      },
      {
        title: 'EMoji & Symbols',
        subText: <IconWorld stroke={1.5} size={MAppSize['4xl']} />,
      },
    ],
  },
  {
    title: 'View',
    items: [
      {
        title: 'Show Playing Next',
      },
      {
        title: 'Show Lyrics',
        prefix: <IconCheck stroke={1.5} size={MAppSize['4xl']} />,
      },
      {
        title: 'Show Status Bar',
        disabled: true,
        hasDivider: true,
      },
      {
        title: 'Hide Sidebar',
      },
      {
        title: 'Enter Full Screen',
        disabled: true,
      },
    ],
  },
  {
    title: 'Account',
    items: [
      {
        title: 'Manage Family...',
      },
      {
        title: 'Add Account...',
        hasDivider: true,
      },
      {
        title: 'Sign Out',
      },
    ],
  },
]
