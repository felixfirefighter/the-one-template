import { Box, Paper } from '@mantine/core'
import { MAppSize } from '@the-one/mantine-ui'

interface Props {
  active?: boolean
  theme: 'light' | 'dark'
  onClick?: () => void
}

export const ThemeCard: React.FC<Props> = ({ active, theme, onClick }) => {
  const borderColor = theme === 'light' ? 'black' : 'white'

  return (
    <Box
      p={'sm'}
      flex={1}
      bg={theme === 'light' ? 'gray.1' : 'dark.5'}
      style={{
        border: '2px solid',
        borderRadius: MAppSize.md,
        borderColor: active ? borderColor : 'transparent',
      }}
      onClick={onClick}
    >
      <Paper
        radius={'sm'}
        p={'xs'}
        mb="xs"
        bg={theme === 'light' ? 'white' : 'dark.4'}
      >
        <Paper
          radius={'md'}
          w={'50%'}
          h={8}
          bg={theme === 'light' ? 'gray.2' : 'gray.6'}
          mb="xs"
        ></Paper>
        <Paper
          radius={'md'}
          w={'75%'}
          h={8}
          bg={theme === 'light' ? 'gray.2' : 'gray.6'}
        ></Paper>
      </Paper>

      <Paper
        radius={'sm'}
        p={'xs'}
        mb="xs"
        bg={theme === 'light' ? 'white' : 'dark.4'}
      >
        <Paper
          radius={'md'}
          w={'75%'}
          h={8}
          bg={theme === 'light' ? 'gray.2' : 'gray.6'}
        ></Paper>
      </Paper>
      <Paper radius={'sm'} p={'xs'} bg={theme === 'light' ? 'white' : 'dark.4'}>
        <Paper
          radius={'md'}
          w={'50%'}
          h={8}
          bg={theme === 'light' ? 'gray.2' : 'gray.6'}
          mb={'xs'}
        ></Paper>
        <Paper
          radius={'md'}
          w={'75%'}
          h={8}
          bg={theme === 'light' ? 'gray.2' : 'gray.6'}
        ></Paper>
      </Paper>
    </Box>
  )
}
