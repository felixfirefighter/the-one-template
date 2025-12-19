'use client'

import { Button, Flex, Modal } from '@mantine/core'
import { notifications } from '@mantine/notifications';
import { MAppText } from '@the-one/mantine-ui'

interface Props {
  opened: boolean
  close: () => void
}

export const PlaygroundDeleteModal: React.FC<Props> = ({ opened, close }) => {
  return (
    <Modal opened={opened} onClose={close} centered withCloseButton={false}>
      <MAppText fontWeight="600" size="lg">
        Are you absolutely sure?
      </MAppText>
      <MAppText c="dimmed" size="sm" mb="md">
        This action cannot be undone. This preset will no longer be accessible
        by you or others you've shared it with.
      </MAppText>

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
