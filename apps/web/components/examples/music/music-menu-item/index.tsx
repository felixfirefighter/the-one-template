import { Menu } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { HeaderItem } from '../music-header/types'

interface Props {
  item: HeaderItem
}

export const MusicMenuItem: React.FC<Props> = ({ item }) => {
  const renderSection = (section: string | React.ReactNode) => {
    if (typeof section === 'string') {
      return (
        <AppText size="sm" c="dimmed">
          {section}
        </AppText>
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
        <AppText size="sm">{item.title}</AppText>
      </Menu.Item>
      {item.hasDivider && <Menu.Divider />}
    </div>
  )
}
