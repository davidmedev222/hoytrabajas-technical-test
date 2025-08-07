import { ProductCard } from "@/modules/products/components/card/product-card";
import { products } from "@/modules/shared/constants/mock.const";

function ProductCardList() {
	return (
		<ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
			{products.map((product) => (
				<li key={product.id}>
					<ProductCard product={product} />
				</li>
			))}
		</ul>
	);
}

export { ProductCardList };
