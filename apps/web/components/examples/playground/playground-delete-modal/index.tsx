import { Button, Flex, Modal } from '@mantine/core'
import { notifications } from '@mantine/notifications';
import { AppText } from '@the-one/ui'

interface Props {
  opened: boolean
  close: () => void
}

export const PlaygroundDeleteModal: React.FC<Props> = ({ opened, close }) => {
  return (
    <Modal opened={opened} onClose={close} centered withCloseButton={false}>
      <AppText fontWeight="600" size="lg">
        Are you absolutely sure?
      </AppText>
      <AppText c="dimmed" size="sm" mb="md">
        This action cannot be undone. This preset will no longer be accessible
        by you or others you've shared it with.
      </AppText>

      <Flex mt={'lg'} gap='xs' justify={'flex-end'}>
        <Button variant="light" onClick={close}>
          Close
        </Button>
        <Button color='red' variant='' onClick={() => {
          notifications.show({
            message: 'The preset has been deleted',
            color: 'red'
          })
          close()
        }}>
          Delete
        </Button>
      </Flex>
    </Modal>
  )
}
