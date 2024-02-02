import { Box, Flex, SegmentedControl, Textarea } from "@mantine/core"
import styles from './index.module.css'
import { AppSize, AppText } from "@the-one/ui"
import { MODES } from "./data"

export const PlaygroundMain = () => {
  return (
    <Box p={'xs'} px={'md'}>
      <Flex>
        <Textarea flex={1} rows={30}></Textarea>
        <Box px={'sm'} className={styles.options}>
          <AppText fontWeight="600" size="sm" mb={AppSize.sm}>Mode</AppText>
          <SegmentedControl size="xs" fullWidth data={MODES}/>

          <AppText fontWeight="600" size="sm" mb={AppSize.sm}>Model</AppText>
        </Box>
      </Flex>
    </Box>
  )
}