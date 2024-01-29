'use client'

import { Box, Menu } from '@mantine/core'
import { AppText } from '@the-one/ui'
import { HEADERS } from './data'
import styles from './index.module.css'

export const MusicHeader = () => {
  return (
    <Box p={'xs'} px={'lg'} className={styles.box}>
      {HEADERS.map((item) => {
        return (
          <Menu key={item.title} position='bottom-start'>
            <Menu.Target>
              <Box
                mr={'sm'}
                display={'inline-block'}
                className={styles.headerItem}
              >
                <AppText size="sm" fontWeight={item.isBold ? '700' : '400'}>
                  {item.title}
                </AppText>
              </Box>
            </Menu.Target>

            <Menu.Dropdown>
              {item.items.map((subItem) => {
                return (
                  <Menu.Item
                    key={subItem.title}
                    rightSection={
                      <AppText size="sm" c="dimmed">
                        {subItem.subText}
                      </AppText>
                    }
                  >
                    {subItem.title}

                  </Menu.Item>
                )
              })}
            </Menu.Dropdown>
          </Menu>
        )
      })}
    </Box>
  )
}
