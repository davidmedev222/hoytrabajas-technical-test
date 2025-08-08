import { productService } from "./product.service";

export const productController = {
	/**
	 * Retrieves all available products
	 * @returns Promise resolving to array of products
	 */
	async getProducts() {
		return await productService.findProducts();
	},
};
