"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { CartProductCard } from "@/modules/cart/components/card/cart-product-card";
import { useCurrentCart } from "@/modules/cart/hooks/use-current-cart";

function CartProductCardList() {
	const { data, error, isLoading } = useCurrentCart();

	if (isLoading) {
		return <CartProductCardListSkeleton />;
	}

	if (error) {
		return (
			<p className="text-center text-destructive text-sm">{error.message}</p>
		);
	}

	if (!data || !data.length) {
		return (
			<p className="text-center text-sm">No hay productos en el carrito</p>
		);
	}

	return (
		<ul className="grid gap-y-4">
			{data?.map((product) => (
				<li key={product.id}>
					<CartProductCard product={product} />
				</li>
			))}
		</ul>
	);
}

function CartProductCardListSkeleton() {
	return (
		<ul className="grid gap-y-4">
			{Array.from({ length: 5 }).map((_) => (
				<li key={crypto.randomUUID()}>
					<Skeleton className="min-h-20" />
				</li>
			))}
		</ul>
	);
}

export { CartProductCardList, CartProductCardListSkeleton };
