"use client";
import useSWR, { mutate } from "swr";
import type { ApiError } from "@/lib/api/api.model";
import type { Product } from "@/models/product.model";
import { productService } from "@/modules/products/services/product.service";

function useProducts() {
	return useSWR<Product[], ApiError>("products", productService.getProducts, {
		revalidateOnFocus: false,
		keepPreviousData: true,
	});
}

async function revalidateProducts() {
	return await mutate("products");
}

export { useProducts, revalidateProducts };
