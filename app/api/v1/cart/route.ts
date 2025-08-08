import { NextResponse } from "next/server";
import { handleApiError } from "@/lib/api/api.helper";
import { cartController } from "./cart.controller";
import { addToCartDto } from "./dtos/add-to-cart-product.dto";

export const revalidate = 0;

/**
 * GET /api/v1/cart
 * Retrieves current shopping cart contents
 * @returns JSON response with cart items array and success message
 */
export async function GET() {
	try {
		const cart = await cartController.getCart();

		return NextResponse.json(
			{
				data: cart,
				message: "Cart retrieved successfully.",
				error: null,
			},
			{ status: 200 },
		);
	} catch (error) {
		return handleApiError(error);
	}
}

/**
 * POST /api/v1/cart
 * Adds a product to the shopping cart
 * @param request - Request object containing productId in JSON body
 * @returns JSON response with updated cart and success message
 */
export async function POST(request: Request) {
	try {
		const body = await request.json();
		const parsedAddToCartDto = addToCartDto.parse(body);

		const updatedCart = await cartController.addToCart(parsedAddToCartDto);

		return NextResponse.json(
			{
				data: updatedCart,
				message: "Product added to cart successfully.",
				error: null,
			},
			{ status: 200 },
		);
	} catch (error) {
		return handleApiError(error);
	}
}

/**
 * DELETE /api/v1/cart
 * Removes a product from the shopping cart
 * @param request - Request object containing productId in JSON body
 * @returns JSON response with updated cart and success message
 */
export async function DELETE(request: Request) {
	try {
		const body = await request.json();
		const parsedRemoveFromCartDto = addToCartDto.parse(body);

		const updatedCart = await cartController.removeFromCart(
			parsedRemoveFromCartDto,
		);

		return NextResponse.json(
			{
				data: updatedCart,
				message: "Product removed from cart successfully.",
				error: null,
			},
			{ status: 200 },
		);
	} catch (error) {
		return handleApiError(error);
	}
}
