import { Box, Divider, NavLink } from '@mantine/core'
import { AppText, AppWidth } from '@the-one/ui'
import { GROUP_LINKS, NAV_LINKS } from './data'

export const MailNavbar = () => {
  return (
    <Box w={AppWidth.Navbar} p={'sm'}>
      {NAV_LINKS.map((link) => {
        return (
          <NavLink
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
        return <NavLink label={link.label} leftSection={link.icon}></NavLink>
      })}
    </Box>
  )
}
