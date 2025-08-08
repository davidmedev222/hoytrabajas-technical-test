import { ApiError } from "@/lib/api/api.error";
import type { Product } from "@/models/product.model";
import { productService } from "../products/product.service";
import type { AddToCartDto } from "./dtos/add-to-cart-product.dto";

let currentCart: Product[] = [];

export const cartService = {
	/**
	 * Retrieves current cart contents from memory storage
	 * @returns Promise resolving to array of products currently in cart
	 */
	async findCart(): Promise<Product[]> {
		return currentCart;
	},

	/**
	 * Adds a product to the cart after validation
	 * @param param0 - Object containing productId to add
	 * @returns Promise resolving to updated cart contents
	 * @throws {ApiError} When product doesn't exist or is already in cart
	 */
	async addToCart({ productId }: AddToCartDto): Promise<Product[]> {
		const productToAdd = await productService.verifyProductExists(productId);

		const isProductInCart = await cartService.verifyProductInCart(productId);

		if (isProductInCart) {
			throw new ApiError({
				message: "Product is already in the cart",
				code: "cart/product-already-in-cart",
			});
		}

		currentCart.push(productToAdd);

		return currentCart;
	},

	/**
	 * Removes a product from the cart
	 * @param param0 - Object containing productId to remove
	 * @returns Promise resolving to updated cart contents
	 * @throws {ApiError} When product doesn't exist
	 */
	async removeFromCart({ productId }: AddToCartDto): Promise<Product[]> {
		const productToDelete = await productService.verifyProductExists(productId);

		currentCart = currentCart.filter(
			(product) => product.id !== productToDelete.id,
		);

		return currentCart;
	},

	/**
	 * Checks if a specific product is currently in the cart
	 * @param productId - Unique product identifier to check
	 * @returns Promise resolving to boolean indicating presence in cart
	 */
	async verifyProductInCart(productId: string): Promise<boolean> {
		return currentCart.some((product) => product.id === productId);
	},
};
