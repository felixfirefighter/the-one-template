import { publicProcedure, router } from "../index.ts"

export const userRouter = router({
  list: publicProcedure.query(() => {
    return ['hello world']
  }),
})
