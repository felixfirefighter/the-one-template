// You can then access the merged route with

import { appRouter } from '../server/routers/_app.ts'

// http://localhost:3000/trpc/<NAMESPACE>.<PROCEDURE>
export type AppRouter = typeof appRouter
