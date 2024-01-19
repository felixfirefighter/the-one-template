import { Box, Divider, NavLink } from '@mantine/core'
import { AppText, AppWidth } from '@the-one/ui'
import { GROUP_LINKS, NAV_LINKS } from './data'
import styles from './index.module.css'

export const MailNavbar = () => {
  return (
    <Box w={AppWidth.Navbar} p={'sm'} className={styles.box}>
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
  )
}
