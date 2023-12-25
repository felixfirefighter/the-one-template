import { publicProcedure, router } from ".."

export const userRouter = router({
  list: publicProcedure.query(() => {
    return ['hello']
  }),
})
