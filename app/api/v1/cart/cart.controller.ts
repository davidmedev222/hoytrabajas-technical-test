import { cartService } from "./cart.service";
import type { AddToCartDto } from "./dtos/add-to-cart-product.dto";

export const cartController = {
	async getCart() {
		return await cartService.findCart();
	},

	async addToCart({ productId }: AddToCartDto) {
		return await cartService.addToCart({ productId });
	},

	async removeFromCart({ productId }: AddToCartDto) {
		return await cartService.removeFromCart({ productId });
	},
};
