'use client'

import { Box, NavLink } from '@mantine/core'
import { usePathname, useRouter } from 'next/navigation'
import { EXAMPLE_NAVIGATIONS } from './types'

export const ExampleNavigations = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Box display={'inline-flex'} py={'md'}>
      {EXAMPLE_NAVIGATIONS.map((nav) => {
        return (
          <NavLink
            style={{ borderRadius: 24 }}
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
