import { NextResponse } from "next/server";
import { handleApiError } from "@/lib/api/api.helper";
import { productController } from "./product.controller";

export async function GET() {
	try {
		const products = await productController.getProducts();

		return NextResponse.json(
			{
				data: products,
				message: "Products retrieved successfully.",
				error: null,
			},
			{ status: 200 },
		);
	} catch (error) {
		return handleApiError(error);
	}
}
