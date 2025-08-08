"use client";
import useSWR, { mutate } from "swr";
import type { ApiError } from "@/lib/api/api.model";
import type { Product } from "@/models/product.model";
import { cartService } from "@/modules/cart/services/cart.service";

function useCurrentCart() {
	return useSWR<Product[], ApiError>("cart", cartService.getCart, {
		revalidateOnFocus: false,
		keepPreviousData: true,
	});
}

async function revalidateCurrentCart() {
	return await mutate("cart");
}

export { useCurrentCart, revalidateCurrentCart };
