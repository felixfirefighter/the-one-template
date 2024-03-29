import { webRouter } from '@the-one/api/src/server/routers/_app'
import * as trpcNext from '@trpc/server/adapters/next'
// export API handler
export default trpcNext.createNextApiHandler({
  router: webRouter,
  createContext: () => ({}),
})
