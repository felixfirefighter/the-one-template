import {
  IconAlignJustified,
  IconArrowBarToDown,
  IconColumns,
} from '@tabler/icons-react'
import styles from './index.module.css'

export const MODES = [
  {
    label: <IconAlignJustified className={styles.icon} />,
    value: 'textarea',
  },

  {
    label: <IconArrowBarToDown className={styles.icon} />,
    value: 'split',
  },
  {
    label: <IconColumns className={styles.icon} />,
    value: 'advanced',
  },
]
