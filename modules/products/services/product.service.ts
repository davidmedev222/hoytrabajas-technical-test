import { API_V1 } from "@/lib/api/api.config";
import { ApiError } from "@/lib/api/api.error";
import type { ApiResponse } from "@/lib/api/api.model";
import type { Product } from "@/models/product.model";

export const productService = {
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
};
