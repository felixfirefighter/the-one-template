import { Code, Modal } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'

interface Props {
  opened: boolean
  close: () => void
}

export const PlaygroundViewCodeModal: React.FC<Props> = ({ opened, close }) => {

  const codeBlock = `import os
import openai
  
openai.api_key = os.getenv("OPENAI_API_KEY")
  
response = openai.Completion.create(
  model="davinci",
  prompt="",
  temperature=0.9,
  max_tokens=5,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0,
)`

  return (
    <Modal size={'lg'} opened={opened} onClose={close} centered withCloseButton={false}>
      <MAppText fontWeight="600" size="lg">
        View code
      </MAppText>
      <MAppText c="dimmed" size="sm">
        You can use the following code to start integrating your current prompt
        and settings into your application.
      </MAppText>

      <Code block my={'md'} bg="dark.9" c="white">
        {codeBlock}
      </Code>

      <MAppText c="dimmed" size="sm">
        Your API Key can be found here. You should use environment variables or
        a secret management tool to expose your key to your applications.{' '}
      </MAppText>
    </Modal>
  )
}
