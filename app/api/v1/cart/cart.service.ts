import { ApiError } from "@/lib/api/api.error";
import type { Product } from "@/models/product.model";
import { productService } from "../products/product.service";
import type { AddToCartDto } from "./dtos/add-to-cart-product.dto";

let currentCart: Product[] = [];

export const cartService = {
	async findCart(): Promise<Product[]> {
		return currentCart;
	},

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

	async removeFromCart({ productId }: AddToCartDto): Promise<Product[]> {
		const productToDelete = await productService.verifyProductExists(productId);

		currentCart = currentCart.filter(
			(product) => product.id !== productToDelete.id,
		);

		return currentCart;
	},

	async verifyProductInCart(productId: string): Promise<boolean> {
		return currentCart.some((product) => product.id === productId);
	},
};
