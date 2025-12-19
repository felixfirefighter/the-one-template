'use client'

import { Button, Flex, Modal, Switch } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'

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
      <MAppText fontWeight="600" size="lg">
        Content filter preferences
      </MAppText>
      <MAppText c="dimmed" size="sm" mb="xl">
        The content filter flags text that may violate our content policy. It's
        powered by our moderation endpoint which is free to use to moderate your
        OpenAI API traffic. Learn more.
      </MAppText>

      <MAppText c="dimmed" size="sm" mb="xs">
        Playground Warnings
      </MAppText>

      <Switch
        defaultChecked={true}
        label={
          <MAppText fontWeight="600" size="sm">
            Show a warning when content is flagged
          </MAppText>
        }
        description={
          <MAppText c="dimmed" size="sm">
            A warning will be shown when sexual, hateful, violent or self-harm
            content is detected.
          </MAppText>
        }
      ></Switch>

      <Flex mt={'lg'} justify={'flex-end'}>
        <Button variant='light' onClick={close}>Close</Button>
      </Flex>
    </Modal>
  )
}
