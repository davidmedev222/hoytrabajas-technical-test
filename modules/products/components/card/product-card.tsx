import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Product } from "@/models/product.model";

interface ProductCardProps {
	product: Product;
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<article className="flex h-full flex-col gap-y-4 rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
			<header className="mb-auto grid gap-y-1">
				<picture className="relative mb-2 aspect-video rounded-xl bg-neutral-100">
					<Image
						src={product.image}
						alt={product.name}
						fill
						className="rounded-xl object-cover"
					/>
				</picture>
				<h2 className="font-semibold text-lg">{product.name}</h2>
				<p className="text-muted-foreground text-sm">{product.description}</p>
			</header>
			<span className="font-semibold text-xl">${product.price}</span>
			<Button>Agregar al carrito</Button>
		</article>
	);
}

export { ProductCard };
