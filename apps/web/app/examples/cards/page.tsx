'use client'

import { Container } from '@mantine/core'
import { CardGrid } from '../../../components/examples/cards/card-grid'

export default function Page(): JSX.Element {
  return (
    <Container size={'xl'} p="xl">
      <CardGrid />
    </Container>
  )
}
