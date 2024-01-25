import { Container, Flex } from '@mantine/core'
import { MusicNavbar } from '../../../components/examples/music/music-navbar'

export default function Page(): JSX.Element {
  return (
    <Container size='xl' p={0}>
      <Flex>
        <MusicNavbar />
      </Flex>
    </Container>
  )
}
