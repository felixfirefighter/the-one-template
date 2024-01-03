import { router } from "../index";
import { userRouter } from "./user";

export const webRouter = router({
  user: userRouter,
})