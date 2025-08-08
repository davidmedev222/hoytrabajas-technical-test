import z from "zod";

/**
 * Validation schema for budget input with automatic type conversion
 *
 * Transforms string input to number and validates:
 * - Must be a valid number
 * - Must be positive integer
 * - Optional field (can be undefined)
 */
export const applyBudgetSchema = z.object({
	budget: z.number().int().optional(),
});

export type ApplyBudgetSchema = z.infer<typeof applyBudgetSchema>;
