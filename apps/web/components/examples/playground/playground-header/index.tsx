'use client'

import {
  ActionIcon,
  Box,
  Button,
  CopyButton,
  Divider,
  Flex,
  Menu,
  Popover,
  Select,
  TextInput,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconCopy, IconDots } from '@tabler/icons-react'
import { MAppButtonSize, MAppIconSize, MAppIconStroke, MAppText } from '@the-one/mantine-ui'
import { PlaygroundContentFilterModal } from '../playground-content-filter-modal'
import { PlaygroundDeleteModal } from '../playground-delete-modal'
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

  const [
    contentFilterModalOpened,
    { open: openContentFilterModal, close: closeContentFilterModal },
  ] = useDisclosure(false)

  const [
    deleteModalOpened,
    { open: openDeleteModal, close: closeDeleteModal },
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
        <MAppText fontWeight="700" size="lg">
          Playground
        </MAppText>

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
              <MAppText fontWeight="600" size="lg">
                Share preset
              </MAppText>
              <MAppText size="sm" c="dimmed" mb={'md'}>
                Anyone who has this link and an OpenAI account will be able to
                view this.
              </MAppText>

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
                    <ActionIcon size={MAppButtonSize.sm} onClick={copy}>
                      <IconCopy
                        stroke={MAppIconStroke.md}
                        size={MAppIconSize.sm}
                      />
                    </ActionIcon>
                  )}
                </CopyButton>
              </Flex>
            </Popover.Dropdown>
          </Popover>

          <Menu position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="light" size={MAppButtonSize.sm}>
                <IconDots />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={openContentFilterModal}>
                <MAppText size="sm">Content filter preferences</MAppText>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item onClick={openDeleteModal}>
                <MAppText size="sm" c="red">
                  Delete preset
                </MAppText>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Flex>
      <Divider />

      <PlaygroundSaveModal close={closeSaveModal} opened={saveModalOpened} />
      <PlaygroundViewCodeModal
        close={closeViewCodeModal}
        opened={viewCodeModalOpened}
      />
      <PlaygroundContentFilterModal
        close={closeContentFilterModal}
        opened={contentFilterModalOpened}
      />
      <PlaygroundDeleteModal
        close={closeDeleteModal}
        opened={deleteModalOpened}
      />
    </Box>
  )
}
