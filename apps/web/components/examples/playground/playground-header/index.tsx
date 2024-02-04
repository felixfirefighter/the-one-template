'use client'

import {
  ActionIcon,
  Box,
  Button,
  CopyButton,
  Divider,
  Flex,
  Popover,
  Select,
  TextInput,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconCopy, IconDotsVertical } from '@tabler/icons-react'
import { AppIconStroke, AppText, MantineSize } from '@the-one/ui'
import { PlaygroundSaveModal } from '../playground-save-modal'
import { PlaygroundViewCodeModal } from '../playground-view-code-modal'
import { PRESETS } from './data'

export const PlaygroundHeader = () => {
  const [saveModalOpened, { open: openSaveModal, close: closeSaveModal }] =
    useDisclosure(false)

  const [
    viewCodeModalOpened,
    { open: openViewCodeModal, close: closeViewCodeModal },
  ] = useDisclosure(false)

  return (
    <Box>
      <Flex
        p={'xs'}
        px={'xl'}
        gap={'md'}
        align={'baseline'}
        justify={'space-between'}
      >
        <AppText fontWeight="700" size="lg">
          Playground
        </AppText>

        <Flex gap={'sm'} align={'center'}>
          <Select
            searchable
            data={PRESETS}
            w={300}
            placeholder="Load a preset"
          />
          <Button variant="light" onClick={openSaveModal}>
            Save
          </Button>
          <Button variant="light" onClick={openViewCodeModal}>
            View Code
          </Button>

          <Popover
            position="bottom-end"
            transitionProps={{
              transition: 'pop',
            }}
          >
            <Popover.Target>
              <Button variant="light">Share</Button>
            </Popover.Target>
            <Popover.Dropdown>
              <AppText fontWeight="600" size="lg">
                Share preset
              </AppText>
              <AppText size="sm" c="dimmed" mb={'md'}>
                Anyone who has this link and an OpenAI account will be able to
                view this.
              </AppText>

              <Flex gap={'sm'}>
                <TextInput
                  flex={1}
                  readOnly
                  defaultValue={
                    'https://platform.openai.com/playground/p/8freNmVb8NGcdUOLae'
                  }
                ></TextInput>

                <CopyButton value="https://platform.openai.com/playground/p/8freNmVb8NGcdUOLae">
                  {({ copy }) => (
                    <ActionIcon size={MantineSize.Button.sm} onClick={copy}>
                      <IconCopy
                        stroke={AppIconStroke.md}
                        size={MantineSize.Icon.sm}
                      />
                    </ActionIcon>
                  )}
                </CopyButton>
              </Flex>
            </Popover.Dropdown>
          </Popover>
          <ActionIcon variant="light" size={'lg'}>
            <IconDotsVertical />
          </ActionIcon>
        </Flex>
      </Flex>
      <Divider />

      <PlaygroundSaveModal close={closeSaveModal} opened={saveModalOpened} />
      <PlaygroundViewCodeModal
        close={closeViewCodeModal}
        opened={viewCodeModalOpened}
      />
    </Box>
  )
}
