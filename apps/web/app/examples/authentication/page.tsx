import { Box, Container, Flex } from '@mantine/core'
import { IconTriangle } from '@tabler/icons-react'
import { AppSpacing, AppText } from '@the-one/ui'

export default function Page(): JSX.Element {
  return (
    <Container fluid p={0}>
      <Flex>
        <Box
          flex={1}
          bg={'dark'}
          c="gray.2"
          p="xl"
          style={{
            borderTopLeftRadius: AppSpacing['3xl'],
            borderBottomLeftRadius: AppSpacing['3xl'],
          }}
        >
          <Flex>
            <Box mr={'xs'}>
              <IconTriangle />
            </Box>
            <AppText>The One Inc</AppText>
          </Flex>
        </Box>
        <Box flex={1}></Box>
      </Flex>
    </Container>
  )
}
