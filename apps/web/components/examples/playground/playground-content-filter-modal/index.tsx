import { Button, Flex, Modal, Switch } from '@mantine/core'
import { AppText } from '@the-one/ui'

interface Props {
  opened: boolean
  close: () => void
}

export const PlaygroundContentFilterModal: React.FC<Props> = ({
  opened,
  close,
}) => {
  return (
    <Modal size={'lg'} opened={opened} onClose={close} centered withCloseButton={false}>
      <AppText fontWeight="600" size="lg">
        Content filter preferences
      </AppText>
      <AppText c="dimmed" size="sm" mb="xl">
        The content filter flags text that may violate our content policy. It's
        powered by our moderation endpoint which is free to use to moderate your
        OpenAI API traffic. Learn more.
      </AppText>

      <AppText c="dimmed" size="sm" mb="xs">
        Playground Warnings
      </AppText>

      <Switch
        defaultChecked={true}
        label={
          <AppText fontWeight="600" size="sm">
            Show a warning when content is flagged
          </AppText>
        }
        description={
          <AppText c="dimmed" size="sm">
            A warning will be shown when sexual, hateful, violent or self-harm
            content is detected.
          </AppText>
        }
      ></Switch>

      <Flex mt={'lg'} justify={'flex-end'}>
        <Button variant='light' onClick={close}>Close</Button>
      </Flex>
    </Modal>
  )
}
