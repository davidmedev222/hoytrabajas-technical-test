import z from "zod";

export const applyBudgetSchema = z.object({
	budget: z.number().int().optional(),
});

export type ApplyBudgetSchema = z.infer<typeof applyBudgetSchema>;
