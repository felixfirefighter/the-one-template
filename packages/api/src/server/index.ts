// @filename: routers/_app.ts
import { initTRPC } from '@trpc/server'
import { userRouter } from './routers/user'

const t = initTRPC.create()

export const middleware = t.middleware
export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  user: userRouter,
})

// You can then access the merged route with
// http://localhost:3000/trpc/<NAMESPACE>.<PROCEDURE>
export type AppRouter = typeof appRouter
