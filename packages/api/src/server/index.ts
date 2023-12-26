// @filename: routers/_app.ts
import { initTRPC } from '@trpc/server'
import SuperJSON from 'superjson'

const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/v10/data-transformers
   */
  transformer: SuperJSON,
})

/**
 * @see https://trpc.io/docs/v10/middlewares
 */
export const middleware = t.middleware

/**
 * Create a router
 * @see https://trpc.io/docs/v10/router
 */
export const router = t.router

/**
 * Create an unprotected procedure
 * @see https://trpc.io/docs/v10/procedures
 **/
export const publicProcedure = t.procedure
