import Image from "next/image";
import type { Product } from "@/models/product.model";

interface CartProductCardProps {
	product: Product;
}

function CartProductCard({ product }: CartProductCardProps) {
	return (
		<article className="flex items-center gap-x-2">
			<picture className="relative size-20 shrink-0 bg-neutral-100">
				<Image
					src={product.image}
					alt={product.name}
					fill
					className="overflow-hidden rounded-xl object-cover"
				/>
			</picture>
			<header className="grid gap-y-1">
				<h2 className="line-clamp-1 font-semibold text-sm">{product.name}</h2>
				<p className="line-clamp-2 text-muted-foreground text-sm">
					{product.description}
				</p>
			</header>
			<span className="font-semibold">${product.price}</span>
		</article>
	);
}

export { CartProductCard };
