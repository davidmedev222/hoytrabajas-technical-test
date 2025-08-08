"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCard } from "@/modules/products/components/card/product-card";
import { useProducts } from "@/modules/products/hooks/use-products";

function ProductCardList() {
	const { data, error, isLoading } = useProducts();

	if (isLoading) {
		return <ProductCardListSkeleton />;
	}

	if (error) {
		return (
			<p className="text-center text-destructive text-sm">{error.message}</p>
		);
	}

	if (!data || !data.length) {
		return <p className="text-center text-sm">No hay productos disponibles</p>;
	}

	return (
		<ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
			{data.map((product) => (
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

export { ProductCardList };
