import { MantineThemeOverride, createTheme } from '@mantine/core'
import { AppSize } from '..'

export const appTheme: MantineThemeOverride = createTheme({
  primaryColor: 'dark',
  components: {
    Button: {
      styles: {
        root: {
          borderRadius: AppSize.md,
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
          padding: AppSize.md
        }
      }
    },
    NavLink: {
      styles: {
        root: {
          borderRadius: AppSize['6xl'],
          fontWeight: 500,
        },
      },
    },
    Paper: {
      styles: {
        root: {
          borderRadius: AppSize.lg,
          borderColor: '#E9ECEF' // gray.2
        }
      }
    },
    Textarea: {
      styles: {
        input: {
          borderRadius: AppSize.md,
        }
      }
    }
  },
})
