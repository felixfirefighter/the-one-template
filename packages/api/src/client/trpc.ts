import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from '..'
import { getBaseUrl } from './url'

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/trpc`,
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          // authorization: getAuthCookie(),
        }
      },
    }),
  ],
})
