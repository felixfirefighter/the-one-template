'use client'

import { Box, Menu } from '@mantine/core'
import { AppSize, AppText } from '@the-one/ui'
import { HEADERS } from './data'
import styles from './index.module.css'
import { HeaderItem } from './types'

export const MusicHeader = () => {
  const renderHeaderItem = (headerItem: HeaderItem) => {
    if (headerItem.items === undefined || headerItem.items.length === 0) {
      return <AppText size="sm">{headerItem.title}</AppText>
    }

    return (
      <Menu trigger="hover" position="right-start">
        <Menu.Target>
          <AppText size="sm">{headerItem.title}</AppText>
        </Menu.Target>
        <Menu.Dropdown>
          {headerItem.items.map((item) => {
            return <Menu.Item key={item.title}>{item.title}</Menu.Item>
          })}
        </Menu.Dropdown>
      </Menu>
    )
  }

  return (
    <Box p={AppSize.md} px={'lg'} className={styles.box}>
      {HEADERS.map((item) => {
        return (
          <Menu key={item.title} position="bottom-start">
            <Menu.Target>
              <Box
                px={AppSize.lg}
                py={AppSize.sm}
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
                  <div key={subItem.title}>
                    <Menu.Item
                      disabled={subItem.disabled}
                      rightSection={
                        <AppText size="sm" c="dimmed">
                          {subItem.subText}
                        </AppText>
                      }
                    >
                      {renderHeaderItem(subItem)}
                    </Menu.Item>
                    {subItem.hasDivider && <Menu.Divider />}
                  </div>
                )
              })}
            </Menu.Dropdown>
          </Menu>
        )
      })}
    </Box>
  )
}
