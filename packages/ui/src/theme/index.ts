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
    NavLink: {
      styles: {
        root: {
          borderRadius: AppSize.md,
        },
      },
    },
  },
})
