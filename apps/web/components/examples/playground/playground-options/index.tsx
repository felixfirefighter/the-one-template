import {
  Box,
  Combobox,
  Flex,
  HoverCard,
  InputBase,
  SegmentedControl,
  Slider,
  useCombobox,
} from '@mantine/core'
import { MAppText } from '@the-one/mantine-ui'
import { useState } from 'react'
import { MODELS, MODES } from './data'
import styles from './index.module.css'

interface Props {
  mode: string
  setMode: (mode: string) => void
}

export const PlaygroundOptions: React.FC<Props> = ({ mode, setMode }) => {
  const [model, setModel] = useState('text-davinci-003')
  const [temperature, setTemperature] = useState(0.75)
  const [maxLen, setMaxLen] = useState(1000)
  const [topP, setTopP] = useState(0.8)

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  return (
    <Box px={'sm'} className={styles.options}>
      <Box mb={'lg'}>
        <MAppText fontWeight="600" size="sm" mb={'xs'}>
          Mode
        </MAppText>
        <SegmentedControl
          size="xs"
          fullWidth
          data={MODES}
          value={mode}
          onChange={setMode}
        />
      </Box>

      <Box mb={'lg'}>
        <MAppText fontWeight="600" size="sm" mb={'xs'}>
          Model
        </MAppText>
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
                              <MAppText fontWeight="600" mb={'xs'}>
                                {item.label}
                              </MAppText>
                              <MAppText c="dimmed" size="sm" mb={'lg'}>
                                {item.description.main}
                              </MAppText>

                              <MAppText size="sm" fontWeight="600">
                                Strengths
                              </MAppText>
                              <MAppText c="dimmed" size="sm">
                                {item.description.strengths}
                              </MAppText>
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

      <HoverCard width={240} closeDelay={0} position="left-start">
        <HoverCard.Target>
          <Box mb={'lg'}>
            <Flex justify={'space-between'}>
              <MAppText fontWeight="600" size="sm" mb={'md'}>
                Temperature
              </MAppText>
              <MAppText size="sm" c="dimmed">
                {temperature.toFixed(2)}
              </MAppText>
            </Flex>
            <Slider
              label={null}
              value={temperature}
              min={0}
              max={1}
              step={0.01}
              onChange={(e) => setTemperature(e)}
            />
          </Box>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Box>
            <MAppText size="sm">
              Controls randomness: lowering results in less random completions.
              As the temperature approaches zero, the model will become
              deterministic and repetitive.
            </MAppText>
          </Box>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard width={240} closeDelay={0} position="left-start">
        <HoverCard.Target>
          <Box mb={'lg'}>
            <Flex justify={'space-between'}>
              <MAppText fontWeight="600" size="sm" mb={'md'}>
                Maximum Length
              </MAppText>
              <MAppText size="sm" c="dimmed">
                {maxLen}
              </MAppText>
            </Flex>
            <Slider
              label={null}
              value={maxLen}
              min={0}
              max={4000}
              step={10}
              onChange={(e) => setMaxLen(e)}
            />
          </Box>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Box>
            <MAppText size="sm">
              The maximum number of tokens to generate. Requests can use up to
              2,048 or 4,000 tokens, shared between prompt and completion. The
              exact limit varies by model.
            </MAppText>
          </Box>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard width={240} closeDelay={0} position="left-start">
        <HoverCard.Target>
          <Box mb={'lg'}>
            <Flex justify={'space-between'}>
              <MAppText fontWeight="600" size="sm" mb={'md'}>
                Top P
              </MAppText>
              <MAppText size="sm" c="dimmed">
                {topP}
              </MAppText>
            </Flex>
            <Slider
              label={null}
              value={topP}
              min={0}
              max={1}
              step={0.1}
              onChange={(e) => setTopP(e)}
            />
          </Box>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Box>
            <MAppText size="sm">
              Control diversity via nucleus sampling: 0.5 means half of all
              likelihood-weighted options are considered.
            </MAppText>
          </Box>
        </HoverCard.Dropdown>
      </HoverCard>
    </Box>
  )
}
