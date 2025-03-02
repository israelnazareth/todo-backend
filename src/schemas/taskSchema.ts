import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(3, "Título deve ter pelo menos 3 caracteres"),
  description: z.string().optional(),
  status: z.enum(["pendente", "em progresso", "concluído"]).default("pendente"),
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/, "ID do usuário inválido"),
});
