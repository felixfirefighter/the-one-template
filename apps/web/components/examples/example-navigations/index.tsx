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
            key={nav.label}
            label={nav.label}
            active={pathname?.startsWith(nav.route)}
            onClick={() => router.push(nav.route)}
          ></NavLink>
        )
      })}
    </Box>
  )
}
