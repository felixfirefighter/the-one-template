import { Button, Divider, Flex, Paper, TextInput } from '@mantine/core'
import { IconBrandGithub, IconBrandGoogleFilled } from '@tabler/icons-react'
import { MAppSize, MAppText } from '@the-one/mantine-ui'

export const CreateAccountCard = () => {
  return (
    <Paper shadow="md" p="lg" withBorder>
      <MAppText size="xl" fontWeight="700">
        Create an account
      </MAppText>
      <MAppText c="gray.6" size="sm" mb='xs'>
        Enter your email below to create an account
      </MAppText>

      <Flex py={MAppSize['3xl']} gap={MAppSize['2xl']}>
        <Button
          fullWidth
          leftSection={<IconBrandGithub />}
          variant="default"
          size="sm"
        >
          Github
        </Button>
        <Button
          fullWidth
          leftSection={<IconBrandGoogleFilled />}
          variant="default"
          size="sm"
        >
          Google
        </Button>
      </Flex>
      <Divider label={<MAppText size="xs">OR CONTINUE WITH</MAppText>}></Divider>
      <TextInput py={MAppSize.md} label="Email" placeholder="theone@email.com"></TextInput>
      <TextInput py={MAppSize.md} type="password" label="Password"></TextInput>
      <Button fullWidth mt={MAppSize['3xl']}>Create account</Button>
    </Paper>
  )
}
