import { Container, Flex } from '@mantine/core'
import { MusicNavbar } from '../../../components/examples/music/music-navbar'
import { MusicMain } from '../../../components/examples/music/music-main'

export default function Page(): JSX.Element {
  return (
    <Container size='xl' p={0}>
      <Flex>
        <MusicNavbar />
        <MusicMain />
      </Flex>
    </Container>
  )
}
