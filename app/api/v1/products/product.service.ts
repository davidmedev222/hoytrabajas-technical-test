import { ApiError } from "@/lib/api/api.error";
import mockProducts from "@/mock-products.json";
import type { Product } from "@/models/product.model";

export const productService = {
	async findProducts(): Promise<Product[]> {
		return mockProducts;
	},

	async findProductById(productId: string): Promise<Product | null> {
		return mockProducts.find((product) => product.id === productId) ?? null;
	},

	async verifyProductExists(productId: string): Promise<Product> {
		const product = await this.findProductById(productId);

		if (!product) {
			throw new ApiError({
				message: "The product does not exist.",
				code: "product/not-found",
			});
		}

		return product;
	},
};
