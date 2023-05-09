import * as z from "zod";
export const LoginSchema = z.object({
  username: z.string().nonempty({ message: "Please enter username" }),
  password: z.string().nonempty({ message: "Please enter password" }),
  remember: z.boolean(),
});
