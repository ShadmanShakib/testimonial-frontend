import * as z from "zod";

export const CreateFormSchema = z.object({
  name: z.string().nonempty({ message: "Please enter form name" }),
});
