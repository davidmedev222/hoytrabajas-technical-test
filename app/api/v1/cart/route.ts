import { NextResponse } from "next/server";
import { handleApiError } from "@/lib/api/api.helper";
import { cartController } from "./cart.controller";
import { addToCartDto } from "./dtos/add-to-cart-product.dto";

export const revalidate = 0;

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
