import { Button, Divider, Flex, Paper, TextInput } from '@mantine/core'
import { IconBrandGithub, IconBrandGoogleFilled } from '@tabler/icons-react'
import { AppSpacing, AppText } from '@the-one/ui'

export const CreateAccountCard = () => {
  return (
    <Paper shadow="md" p="lg" withBorder>
      <AppText size="xl" fontWeight="700">
        Create an account
      </AppText>
      <AppText c="gray.7" size="sm">
        Enter your email below to create an account
      </AppText>

      <Flex py={AppSpacing['3xl']} gap={AppSpacing['2xl']}>
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
      <TextInput py={AppSpacing.md} label="Email" placeholder="theone@email.com"></TextInput>
      <TextInput py={AppSpacing.md} type="password" label="Password"></TextInput>
      <Button fullWidth mt={AppSpacing['3xl']}>Create account</Button>
    </Paper>
  )
}
