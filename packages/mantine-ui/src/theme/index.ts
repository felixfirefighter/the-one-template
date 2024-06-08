import { MantineThemeOverride, createTheme } from '@mantine/core'
import { MAppSize } from '..'

export const appTheme: MantineThemeOverride = createTheme({
  primaryColor: 'dark',
  components: {
    Button: {
      styles: {
        root: {
          borderRadius: MAppSize.md,
        }
      }
    },
    Divider: {
      styles: {
        root: {
          borderColor: '#E9ECEF' // gray.2
        }
      }
    },
    Modal: {
      styles: {
        content: {
          padding: MAppSize.md
        }
      }
    },
    NavLink: {
      styles: {
        root: {
          borderRadius: MAppSize['6xl'],
          fontWeight: 500,
        },
      },
    },
    Paper: {
      styles: {
        root: {
          borderRadius: MAppSize.lg,
          borderColor: '#E9ECEF' // gray.2
        }
      }
    },
    Textarea: {
      styles: {
        input: {
          borderRadius: MAppSize.md,
        }
      }
    }
  },
})
