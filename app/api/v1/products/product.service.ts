import { ApiError } from "@/lib/api/api.error";
import mockProducts from "@/mock-products.json";
import type { Product } from "@/models/product.model";

export const productService = {
	/**
	 * Retrieves all products from the mock data source
	 * @returns Promise resolving to array of all available products
	 */
	async findProducts(): Promise<Product[]> {
		return mockProducts;
	},

	/**
	 * Finds a specific product by its unique identifier
	 * @param productId - Unique product identifier
	 * @returns Promise resolving to product if found, null otherwise
	 */
	async findProductById(productId: string): Promise<Product | null> {
		return mockProducts.find((product) => product.id === productId) ?? null;
	},

	/**
	 * Verifies product existence and throws error if not found
	 * @param productId - Unique product identifier to verify
	 * @returns Promise resolving to product if exists
	 * @throws {ApiError} When product with given ID doesn't exist
	 */
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
