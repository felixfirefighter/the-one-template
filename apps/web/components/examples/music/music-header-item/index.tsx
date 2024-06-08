import { Menu } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import { MAppSize, MAppText } from '@the-one/mantine-ui'
import clsx from 'clsx'
import { HeaderItem } from '../music-header/types'
import { MusicMenuItem } from '../music-menu-item'
import styles from './index.module.css'

interface Props {
  item: HeaderItem
  activeItem: string | null

  setActiveItem: (value: string | null) => void
}

export const MusicHeaderItem: React.FC<Props> = ({
  item,
  setActiveItem,
  activeItem,
}) => {
  if (item.items === undefined || item.items.length === 0) {
    return <MusicMenuItem item={item} />
  }

  return (
    <Menu
      trigger="hover"
      position="right-start"
      onOpen={() => setActiveItem(item.title)}
      onClose={() => {
        if (activeItem === item.title) {
          setActiveItem(null)
        }
      }}
    >
      <Menu.Target>
        <Menu.Item
          className={clsx({
            [styles.activeSubHeaderItem!]: item.title === activeItem,
          })}
          rightSection={
            <IconChevronRight
              size={MAppSize['4xl']}
              color="var(--mantine-color-gray-6)"
            />
          }
        >
          <MAppText size="sm">{item.title}</MAppText>
        </Menu.Item>
      </Menu.Target>
      <Menu.Dropdown>
        {item.items.map((item) => {
          return <MusicMenuItem item={item} key={item.title} />
        })}
      </Menu.Dropdown>
    </Menu>
  )
}
