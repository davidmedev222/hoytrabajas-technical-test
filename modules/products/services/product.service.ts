import { API_V1 } from "@/lib/api/api.config";
import { ApiError } from "@/lib/api/api.error";
import type { ApiResponse } from "@/lib/api/api.model";
import type { Product } from "@/models/product.model";

export const productService = {
	/**
	 * Fetches all available products from the API
	 * @returns Promise resolving to array of products
	 * @throws {ApiError} When API request fails or returns error response
	 */
	async getProducts(): Promise<Product[]> {
		const response = await fetch(API_V1.PRODUCTS, {
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
	 * Finds optimal product combination to maximize quantity within budget using greedy algorithm
	 * @param products - Available products to choose from
	 * @param budget - Maximum budget constraint
	 * @returns Array of selected products sorted by price (ascending)
	 * @example
	 * ```ts
	 * const products = await productService.getProducts();
	 * const selection = productService.findBestCombination(products, 500);
	 * console.log(`Selected ${selection.length} products`);
	 * ```
	 */
	findBestCombination(products: Product[], budget: number): Product[] {
		const affordableProducts = products
			.filter((product) => product.price <= budget)
			.sort((a, b) => a.price - b.price);

		let spent = 0;

		return affordableProducts.filter((product) => {
			if (spent + product.price <= budget) {
				spent += product.price;
				return true;
			}
			return false;
		});
	},
};
