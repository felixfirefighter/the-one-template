import { router } from "../index.ts";
import { userRouter } from "./user.ts";

export const webRouter = router({
  user: userRouter,
})