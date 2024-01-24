import { Box, MantineSpacing, StyleProp } from '@mantine/core'
import { getFirstCharacterFromEachWord } from '@the-one/utils'
import styles from './index.module.css'

interface Props {
  username: string
  p?: StyleProp<MantineSpacing>
}

export const AppProfileLogo: React.FC<Props> = ({ username, p }) => {
  const displayName = getFirstCharacterFromEachWord(username)

  return (
    <Box p={p} className={styles.container}>
      {displayName}
    </Box>
  )
}
