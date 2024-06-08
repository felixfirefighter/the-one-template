import { Box, Button, Container, Divider, Flex, TextInput } from '@mantine/core'
import { IconBrandGoogleFilled, IconTriangle } from '@tabler/icons-react'
import { MAppSize, MAppText } from '@the-one/mantine-ui'
import Link from 'next/link'

export default function Page(): JSX.Element {
  return (
    <Container fluid p={0} h={'700px'}>
      <Flex h="100%">
        <Flex
          h="100%"
          direction={'column'}
          flex={1}
          bg={'dark.9'}
          c="gray.2"
          p="xl"
          style={{
            borderTopLeftRadius: MAppSize['3xl'],
            borderBottomLeftRadius: MAppSize['3xl'],
          }}
          justify={'space-between'}
        >
          <Flex>
            <Box mr={'xs'}>
              <IconTriangle />
            </Box>
            <MAppText>The One Inc</MAppText>
          </Flex>
          <Box>
            <MAppText>
              “This library has saved me countless hours of work and helped me
              deliver stunning designs to my clients faster than ever before.”
            </MAppText>
            <MAppText>- Alex Low</MAppText>
          </Box>
        </Flex>
        <Flex justify={'center'} flex={1} h="100%">
          <Flex ta={'center'} h="100%" justify={'center'} align={'center'}>
            <Box w={'75%'}>
              <MAppText size="2xl" fontWeight="700">
                Create an account
              </MAppText>
              <MAppText c="gray.6" size="sm" mb="md">
                Enter your email below to create an account
              </MAppText>
              <TextInput placeholder="name@theone.com" mb={''}></TextInput>
              <Button my={'sm'} fullWidth>
                Sign in with Email
              </Button>

              <Divider
                my={'lg'}
                label={<MAppText size="xs">OR CONTINUE WITH</MAppText>}
              ></Divider>

              <Button
                variant="default"
                leftSection={<IconBrandGoogleFilled />}
                fullWidth
              >
                Google
              </Button>

              <Flex justify={'center'} my={'lg'}>
                <MAppText size="sm" c="gray.6" w={'75%'}>
                  By clicking continue, your agree to our{' '}
                  <Link href="">Terms of Service</Link> and{' '}
                  <Link href="">Privacy Policy</Link>
                </MAppText>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}
