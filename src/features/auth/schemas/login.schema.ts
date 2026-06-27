import { z } from "zod";

export const formSchema = z.object({
  email: z.string().nonempty("O campo é obrigatório"),
  password: z.string().min(5, "Deve ter no minimo 5 caracteres"),
});

export type FormDataTypes = z.infer<typeof formSchema>;
