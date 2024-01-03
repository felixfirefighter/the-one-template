import { publicProcedure, router } from "../index"

export const userRouter = router({
  list: publicProcedure.query(() => {
    return ['hello world']
  }),
})
