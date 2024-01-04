'use client'

import { Box, NavLink, useMantineTheme } from '@mantine/core'
import { usePathname, useRouter } from 'next/navigation'
import { EXAMPLE_NAVIGATIONS } from './types'

export const ExampleNavigations = () => {
  const theme = useMantineTheme()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Box display={'inline-flex'} py={'md'}>
      {EXAMPLE_NAVIGATIONS.map((nav) => {
        return (
          <NavLink
            style={{ borderRadius: theme.spacing.xl }}
            ta={'center'}
            key={nav.label}
            label={nav.label}
            active={pathname === nav.route}
            onClick={() => router.push(nav.route)}
          ></NavLink>
        )
      })}
    </Box>
  )
}
