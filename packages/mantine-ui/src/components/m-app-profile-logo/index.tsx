import { Box } from '@mantine/core'
import { getFirstCharacterFromEachWord } from '@the-one/utils'
import styles from './index.module.css'

interface Props {
  username: string
}

export const MAppProfileLogo: React.FC<Props> = ({ username }) => {
  const displayName = getFirstCharacterFromEachWord(username)

  return <Box className={styles.container}>{displayName}</Box>
}
