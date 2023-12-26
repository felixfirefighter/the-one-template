import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClientProvider } from '@the-one/api'

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
          <MantineProvider>{children}</MantineProvider>
        </body>
      </html>
    </ClientProvider>
  )
}
