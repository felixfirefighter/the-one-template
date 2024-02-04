import { Button, Flex, Modal, TextInput } from '@mantine/core'
import { AppText } from '@the-one/ui'

interface Props {
  opened: boolean
  close: () => void
}

export const PlaygroundSaveModal: React.FC<Props> = ({ opened, close }) => {
  return (
    <Modal opened={opened} onClose={close} centered withCloseButton={false}>
      <AppText fontWeight="600" size="lg">
        Save preset
      </AppText>
      <AppText c="dimmed" size="sm" mb={'lg'}>
        This will save the current playground state as a preset which you can
        access later or share with others.
      </AppText>

      <TextInput label="Name" mb="sm" placeholder='Dessert Shop'></TextInput>
      <TextInput label="Description" mb={'lg'} placeholder='Very good dessert'></TextInput>

      <Flex justify="flex-end">
        <Button>Save</Button>
      </Flex>
    </Modal>
  )
}
