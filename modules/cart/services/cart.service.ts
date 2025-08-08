import { API_V1 } from "@/lib/api/api.config";
import { ApiError } from "@/lib/api/api.error";
import type { ApiResponse } from "@/lib/api/api.model";
import type { Product } from "@/models/product.model";

export const cartService = {
	/**
	 * Retrieves current cart items from the API
	 * @returns Promise resolving to array of products in cart
	 * @throws {ApiError} When API request fails or returns error response
	 */
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

	/**
	 * Adds a product to the shopping cart
	 * @param productId - Unique identifier of the product to add
	 * @throws {ApiError} When product doesn't exist or API request fails
	 */
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

	/**
	 * Removes a product from the shopping cart
	 * @param productId - Unique identifier of the product to remove
	 * @throws {ApiError} When product doesn't exist or API request fails
	 */
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
