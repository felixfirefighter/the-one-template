import { Box, NavLink } from '@mantine/core'
import { AppText, AppWidth } from '@the-one/ui'
import { NAV_LINKS } from './data'
import styles from './index.module.css'

export const MusicNavbar = () => {
  return (
    <Box w={AppWidth.Navbar} p={'sm'} className={styles.box}>
      {NAV_LINKS.map((link) => {
        return (
          <Box key={link.title} mb={'md'}>
            <Box mx={'xs'} mb={'xs'}>
              <AppText fontWeight="700">{link.title}</AppText>
            </Box>

            {link.items.map((item) => {
              return (
                <NavLink
                  key={item.title}
                  label={item.title}
                  leftSection={item.icon}
                  active={item.active}
                ></NavLink>
              )
            })}
          </Box>
        )
      })}
    </Box>
  )
}
