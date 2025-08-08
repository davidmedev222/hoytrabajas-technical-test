import { productService } from "./product.service";

export const productController = {
	async getProducts() {
		return await productService.findProducts();
	},
};
