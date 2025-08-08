import { z } from "zod";

export const addToCartDto = z
	.object({
		productId: z
			.string("The field productId must be a string.")
			.min(1, "The field productId is required."),
	})
	.strict();

export type AddToCartDto = z.infer<typeof addToCartDto>;
