import { Box, useMantineTheme } from '@mantine/core'
import React from 'react'
import { AppSize } from '../..'
import { AppText } from '../app-text'
import styles from './index.module.css'

interface Props {
  active?: boolean
  title: string
  icon?: React.ReactNode
  flex?: number

  onClick: () => void
}

export const AppSimpleSelectCard: React.FC<Props> = ({ active, flex, title, icon, onClick }) => {
  const theme = useMantineTheme()

  return (
    <Box
      flex={flex}
      className={styles.box}
      ta={'center'}
      py={'md'}
      px={'xl'}
      style={{
        borderRadius: AppSize.md,
        borderColor: active ? theme.colors.dark[7] : theme.colors.gray[2],
      }}
      onClick={onClick}
    >
      {icon}
      <AppText size="sm" fontWeight="500">
        {title}
      </AppText>
    </Box>
  )
}
