'use client'

import {
  Box,
  Combobox,
  Flex,
  HoverCard,
  InputBase,
  SegmentedControl,
  Textarea,
  useCombobox,
} from '@mantine/core'
import { AppSize, AppText } from '@the-one/ui'
import { useState } from 'react'
import { MODELS, MODES } from './data'
import styles from './index.module.css'

export const PlaygroundMain = () => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })
  const [model, setModel] = useState('text-davinci-003')

  return (
    <Box p={'xs'} px={'md'}>
      <Flex>
        <Textarea flex={1} rows={30}></Textarea>
        <Box px={'sm'} className={styles.options}>
          <Box mb={'xs'}>
            <AppText fontWeight="600" size="sm" mb={AppSize.sm}>
              Mode
            </AppText>
            <SegmentedControl size="xs" fullWidth data={MODES} />
          </Box>

          <Box mb={'xs'}>
            <AppText fontWeight="600" size="sm" mb={AppSize.sm}>
              Model
            </AppText>
            <Combobox
              withinPortal={false}
              store={combobox}
              onOptionSubmit={(val) => {
                setModel(val)
                combobox.closeDropdown()
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  pointer
                  rightSection={<Combobox.Chevron />}
                  rightSectionPointerEvents="none"
                  onClick={() => combobox.toggleDropdown()}
                >
                  {model}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>
                  {MODELS.map((group) => {
                    return (
                      <Combobox.Group key={group.group} label={group.group}>
                        {group.items.map((item) => {
                          return (
                            <HoverCard
                              width={240}
                              closeDelay={0}
                              position="left-start"
                              withinPortal={false}
                              key={item.label}
                            >
                              <HoverCard.Target>
                                <Combobox.Option value={item.value}>
                                  {item.label}
                                </Combobox.Option>
                              </HoverCard.Target>
                              <HoverCard.Dropdown>
                                <Box>
                                  <AppText fontWeight='600' mb={'xs'}>{item.label}</AppText>
                                  <AppText c='dimmed' size='sm' mb={'lg'}>{item.description.main}</AppText>

                                  <AppText size='sm' fontWeight='600'>Strengths</AppText>
                                  <AppText c='dimmed' size='sm'>{item.description.strengths}</AppText>
                                </Box>
                              </HoverCard.Dropdown>
                            </HoverCard>
                          )
                        })}
                      </Combobox.Group>
                    )
                  })}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
