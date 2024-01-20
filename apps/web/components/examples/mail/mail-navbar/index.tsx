import { Box, Divider, NavLink, Select } from '@mantine/core'
import { AppText, AppWidth } from '@the-one/ui'
import { useState } from 'react'
import { ACCOUNTS, GROUP_LINKS, NAV_LINKS } from './data'
import styles from './index.module.css'

export const MailNavbar = () => {
  const [activeAccount, setActiveAccount] = useState(ACCOUNTS[0])

  return (
    <Box w={AppWidth.Navbar} className={styles.box}>
      <Select
        p="sm"
        data={ACCOUNTS}
        leftSection={activeAccount?.icon}
        value={activeAccount?.value}
        onChange={(value) => {
          const newAccount = ACCOUNTS.find((account) => account.value === value)
          setActiveAccount(newAccount)
        }}
      ></Select>

      <Divider></Divider>

      <Box p='sm'>
        {NAV_LINKS.map((link) => {
          return (
            <NavLink
              key={link.label}
              label={link.label}
              leftSection={link.icon}
              active={link.active}
              rightSection={
                <AppText size="sm" fontWeight={'500'}>
                  {link.count}
                </AppText>
              }
            ></NavLink>
          )
        })}

        <Divider my={'md'} />

        {GROUP_LINKS.map((link) => {
          return (
            <NavLink
              key={link.label}
              label={link.label}
              leftSection={link.icon}
              rightSection={
                <AppText size="sm" fontWeight={'500'}>
                  {link.count}
                </AppText>
              }
            ></NavLink>
          )
        })}
      </Box>
    </Box>
  )
}
