import {
  Box,
  Button,
  Container,
  Divider,
  TextInput,
  Textarea,
} from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { UrlInputs } from '../../../../components/examples/forms/profile/url-inputs'

export default function Page(): JSX.Element {
  return (
    <Container size={'sm'} m={0}>
      <MAppText size="lg" fontWeight="600">
        Profile
      </MAppText>
      <MAppText c="gray.6" size="sm">
        This is how others will see you on the site.
      </MAppText>

      <Divider my={'lg'}></Divider>

      <TextInput
        placeholder="theone"
        label="Username"
        description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days."
        mb={'lg'}
      ></TextInput>

      <TextInput
        placeholder="joedoe@theone.com"
        label="Email"
        description="This is your public email address. It can be changed at any time."
        mb={'lg'}
      ></TextInput>

      <Textarea
        label="Bio"
        description="Write something that you want people to know about you!"
        placeholder="I have 2 cat plushies and 2 dog plushies"
        mb={'lg'}
      ></Textarea>

      <UrlInputs />

      <Box py={'xl'}>
        <Button>Update profile</Button>
      </Box>
    </Container>
  )
}
