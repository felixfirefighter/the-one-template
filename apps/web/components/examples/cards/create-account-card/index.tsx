import { Button, Divider, Flex, Paper, TextInput } from '@mantine/core'
import { IconBrandGithub, IconBrandGoogleFilled } from '@tabler/icons-react'
import { AppSize, AppText } from '@the-one/ui'

export const CreateAccountCard = () => {
  return (
    <Paper shadow="md" p="lg" withBorder>
      <AppText size="xl" fontWeight="700">
        Create an account
      </AppText>
      <AppText c="gray.6" size="sm" mb='xs'>
        Enter your email below to create an account
      </AppText>

      <Flex py={AppSize['3xl']} gap={AppSize['2xl']}>
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
      <Divider label={<AppText size="xs">OR CONTINUE WITH</AppText>}></Divider>
      <TextInput py={AppSize.md} label="Email" placeholder="theone@email.com"></TextInput>
      <TextInput py={AppSize.md} type="password" label="Password"></TextInput>
      <Button fullWidth mt={AppSize['3xl']}>Create account</Button>
    </Paper>
  )
}
