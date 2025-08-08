"use client";
import useSWR, { mutate } from "swr";
import type { ApiError } from "@/lib/api/api.model";
import type { Product } from "@/models/product.model";
import { cartService } from "@/modules/cart/services/cart.service";

/**
 * Custom hook for managing cart state with SWR caching and revalidation
 * @returns SWR response object with cart data, loading state, and error handling
 * @example
 * ```ts
 * const { data: cartItems, isLoading, error } = useCurrentCart();
 * ```
 */
function useCurrentCart() {
	return useSWR<Product[], ApiError>("cart", cartService.getCart, {
		revalidateOnFocus: false,
		keepPreviousData: true,
	});
}

/**
 * Triggers cart data revalidation across all components using this hook
 * @returns Promise that resolves when revalidation is complete
 */
async function revalidateCurrentCart() {
	return await mutate("cart");
}

export { useCurrentCart, revalidateCurrentCart };
