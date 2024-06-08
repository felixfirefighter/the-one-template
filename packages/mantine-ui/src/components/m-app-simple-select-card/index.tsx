import { Box, useMantineTheme } from '@mantine/core'
import React from 'react'
import { MAppSize } from '../..'
import { MAppText } from '../m-app-text'
import styles from './index.module.css'

interface Props {
  active?: boolean
  title: string
  icon?: React.ReactNode
  flex?: number

  onClick: () => void
}

export const MAppSimpleSelectCard: React.FC<Props> = ({ active, flex, title, icon, onClick }) => {
  const theme = useMantineTheme()

  return (
    <Box
      flex={flex}
      className={styles.box}
      ta={'center'}
      py={'md'}
      px={'xl'}
      style={{
        borderRadius: MAppSize.md,
        borderColor: active ? theme.colors.dark[7] : theme.colors.gray[2],
      }}
      onClick={onClick}
    >
      {icon}
      <MAppText size="sm" fontWeight="500">
        {title}
      </MAppText>
    </Box>
  )
}
