'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { CreateTRPCReact, createTRPCReact } from '@trpc/react-query'
import { useState } from 'react'
import SuperJSON from 'superjson'
import type { WebRouter } from '../types/index'
import { getBaseUrl } from '../utils/url'

// TODO: Replace any with the proper type
export const trpc: CreateTRPCReact<WebRouter, any, any> = createTRPCReact<WebRouter>({
  unstable_overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn()
        await opts.queryClient.invalidateQueries()
      },
    },
  },
})

export function ClientProvider(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      transformer: SuperJSON,
    }),
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}
