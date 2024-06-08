'use client'

import { Box, Menu } from '@mantine/core'
import { MAppSize, MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { MusicHeaderItem } from '../music-header-item'
import { HEADERS } from './data'
import styles from './index.module.css'

export const MusicHeader = () => {
  const [activeSubHeaderItem, setActiveSubHeaderItem] = useState<string | null>(
    null,
  )

  return (
    <Box p={MAppSize.md} px={'lg'} className={styles.box}>
      {HEADERS.map((item) => {
        return (
          <Menu key={item.title} position="bottom-start">
            <Menu.Target>
              <Box
                px={MAppSize.lg}
                py={MAppSize.sm}
                display={'inline-block'}
                className={styles.headerItem}
              >
                <MAppText size="sm" fontWeight={item.isBold ? '700' : '400'}>
                  {item.title}
                </MAppText>
              </Box>
            </Menu.Target>

            <Menu.Dropdown>
              {item.items.map((subItem) => {
                return (
                  <MusicHeaderItem
                    key={subItem.title}
                    item={subItem}
                    activeItem={activeSubHeaderItem}
                    setActiveItem={setActiveSubHeaderItem}
                  />
                )
              })}
            </Menu.Dropdown>
          </Menu>
        )
      })}
    </Box>
  )
}
