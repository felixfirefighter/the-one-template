'use client'

import { Menu } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { HeaderItem } from '../music-header/types'

interface Props {
  item: HeaderItem
}

export const MusicMenuItem: React.FC<Props> = ({ item }) => {
  const renderSection = (section: string | React.ReactNode) => {
    if (typeof section === 'string') {
      return (
        <MAppText size="sm" c="dimmed">
          {section}
        </MAppText>
      )
    }

    return section
  }

  return (
    <div>
      <Menu.Item
        disabled={item.disabled}
        leftSection={renderSection(item.prefix)}
        rightSection={renderSection(item.subText)}
      >
        <MAppText size="sm">{item.title}</MAppText>
      </Menu.Item>
      {item.hasDivider && <Menu.Divider />}
    </div>
  )
}
