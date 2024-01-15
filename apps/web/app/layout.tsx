import '@mantine/charts/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { ClientProvider } from '@the-one/api'
import { appTheme } from '@the-one/ui'
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
          <ColorSchemeScript />
        </head>
        <body className={inter.className}>
          <MantineProvider theme={appTheme}>{children}</MantineProvider>
        </body>
      </html>
    </ClientProvider>
  )
}
