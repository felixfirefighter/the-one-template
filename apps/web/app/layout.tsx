import '@mantine/charts/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/core/styles.layer.css'
import '@mantine/dates/styles.css'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import { ClientProvider } from '@the-one/api'
import { appTheme } from '@the-one/ui'
import 'mantine-datatable/styles.layer.css'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <ClientProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript defaultColorScheme="auto" />
        </head>
        <body className={inter.className}>
          <MantineProvider defaultColorScheme="auto" theme={appTheme}>
            <Notifications position="bottom-right" />
            {children}
          </MantineProvider>
        </body>
      </html>
    </ClientProvider>
  )
}
