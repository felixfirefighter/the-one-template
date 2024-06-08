import { Button, Flex, Modal, TextInput } from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'

interface Props {
  opened: boolean
  close: () => void
}

export const PlaygroundSaveModal: React.FC<Props> = ({ opened, close }) => {
  return (
    <Modal opened={opened} onClose={close} centered withCloseButton={false}>
      <MAppText fontWeight="600" size="lg">
        Save preset
      </MAppText>
      <MAppText c="dimmed" size="sm" mb={'lg'}>
        This will save the current playground state as a preset which you can
        access later or share with others.
      </MAppText>

      <TextInput label="Name" mb="sm" placeholder='Dessert Shop'></TextInput>
      <TextInput label="Description" mb={'lg'} placeholder='Very good dessert'></TextInput>

      <Flex justify="flex-end">
        <Button>Save</Button>
      </Flex>
    </Modal>
  )
}
