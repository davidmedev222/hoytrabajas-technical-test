"use client";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@/models/product.model";
import { applyBudgetSchema } from "@/modules/budget/schemas/apply-budget.schema";
import { ProductCard } from "@/modules/products/components/card/product-card";
import { useProducts } from "@/modules/products/hooks/use-products";
import { productService } from "@/modules/products/services/product.service";

function ProductCardList() {
	const searchParams = useSearchParams();
	const budget = searchParams.get("budget");

	const { data, error, isLoading } = useProducts();

	const filteredProducts: Product[] = useMemo(() => {
		if (!data || !data.length) return [];
		if (!budget) return data;

		const parsedBudget = applyBudgetSchema.safeParse({
			budget: Number(budget),
		});
		if (!parsedBudget.success || !parsedBudget.data.budget) return data;

		return productService.findBestCombination(data, parsedBudget.data.budget);
	}, [data, budget]);

	if (isLoading) {
		return <ProductCardListSkeleton />;
	}

	if (error) {
		return (
			<p className="text-center text-destructive text-sm">{error.message}</p>
		);
	}

	if (!filteredProducts.length) {
		return <p className="text-center text-sm">No hay productos disponibles</p>;
	}

	return (
		<ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
			{filteredProducts.map((product) => (
				<li key={product.id}>
					<ProductCard product={product} />
				</li>
			))}
		</ul>
	);
}

function ProductCardListSkeleton() {
	return (
		<ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
			{Array.from({ length: 8 }).map((_) => (
				<li key={crypto.randomUUID()}>
					<Skeleton className="min-h-[26.875rem]" />
				</li>
			))}
		</ul>
	);
}

export { ProductCardList, ProductCardListSkeleton };
