'use client'

import { Container, Paper } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { ExampleNavigations } from '../../components/examples/example-navigations'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <Container size={'xl'} py={'xl'}>
      <Container py={'xl'}>
        <MAppText mb="lg" size="6xl" fontWeight="700" ta="center">
          Check out the examples
        </MAppText>
        <MAppText ta="center" size="xl" c="gray.6">
          Authentication, cards, dashboard, forms, music and more. Look at the
          examples and get inspired to build your own.
        </MAppText>
      </Container>

      <ExampleNavigations />
      <Paper shadow="xl" withBorder radius={'lg'}>
        {children}
      </Paper>
    </Container>
  )
}
