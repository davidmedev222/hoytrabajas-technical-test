import { cartService } from "./cart.service";
import type { AddToCartDto } from "./dtos/add-to-cart-product.dto";

export const cartController = {
	/**
	 * Retrieves current shopping cart contents
	 * @returns Promise resolving to array of products in cart
	 */
	async getCart() {
		return await cartService.findCart();
	},

	/**
	 * Adds a product to the shopping cart
	 * @param param0 - DTO containing productId to add
	 * @returns Promise resolving to updated cart contents
	 */
	async addToCart({ productId }: AddToCartDto) {
		return await cartService.addToCart({ productId });
	},

	/**
	 * Removes a product from the shopping cart
	 * @param param0 - DTO containing productId to remove
	 * @returns Promise resolving to updated cart contents
	 */
	async removeFromCart({ productId }: AddToCartDto) {
		return await cartService.removeFromCart({ productId });
	},
};
