import { API_V1 } from "@/lib/api/api.config";
import { ApiError } from "@/lib/api/api.error";
import type { ApiResponse } from "@/lib/api/api.model";
import type { Product } from "@/models/product.model";

export const cartService = {
	async getCart(): Promise<Product[]> {
		const response = await fetch(API_V1.CART, {
			method: "GET",
		});

		const api: ApiResponse<Product[]> = await response.json();
		if (api.error) {
			throw new ApiError({
				code: api.error.code,
				message: api.error.message,
			});
		}

		return api.data;
	},

	async addProductToCart(productId: string): Promise<void> {
		const response = await fetch(API_V1.CART, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ productId }),
		});

		const api: ApiResponse<void> = await response.json();
		if (api.error) {
			throw new ApiError({
				code: api.error.code,
				message: api.error.message,
			});
		}
	},

	async removeProductFromCart(productId: string): Promise<void> {
		const response = await fetch(API_V1.CART, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ productId }),
		});

		const api: ApiResponse<void> = await response.json();
		if (api.error) {
			throw new ApiError({
				code: api.error.code,
				message: api.error.message,
			});
		}
	},
};
