'use client'

import { Box, Container, Divider, Flex, NavLink } from '@mantine/core'
import { AppText, AppWidth } from '@the-one/ui'
import { NAV_LINKS } from './data'
import { usePathname } from 'next/navigation'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const pathname = usePathname()

  return (
    <Container size={'xl'} p="xl">
      <AppText size="2xl" fontWeight="700">
        Settings
      </AppText>
      <AppText c="gray.6">Manage your profile and accounts settings</AppText>

      <Divider my={'lg'}></Divider>

      <Flex>
        <Container p={0} m={0} w={AppWidth.Navbar}>
          {NAV_LINKS.map((link) => {
            return (
              <NavLink
                label={link.label}
                href={link.href}
                key={link.href}
                active={pathname === link.href}
              ></NavLink>
            )
          })}
        </Container>
        <Box flex={1}>{children}</Box>
      </Flex>
    </Container>
  )
}