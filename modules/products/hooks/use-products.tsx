"use client";
import useSWR, { mutate } from "swr";
import type { ApiError } from "@/lib/api/api.model";
import type { Product } from "@/models/product.model";
import { productService } from "@/modules/products/services/product.service";

/**
 * Custom hook for fetching and caching products data using SWR
 * @returns SWR response object with products data, loading state, and error handling
 * @example
 * ```ts
 * const { data: products, isLoading, error } = useProducts();
 * ```
 */
function useProducts() {
	return useSWR<Product[], ApiError>("products", productService.getProducts, {
		revalidateOnFocus: false,
		keepPreviousData: true,
	});
}

/**
 * Triggers products data revalidation across all components using this hook
 * @returns Promise that resolves when revalidation is complete
 */
async function revalidateProducts() {
	return await mutate("products");
}

export { useProducts, revalidateProducts };
