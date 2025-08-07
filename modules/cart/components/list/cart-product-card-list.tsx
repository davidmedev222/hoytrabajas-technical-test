import { CartProductCard } from "@/modules/cart/components/card/cart-product-card";
import { products } from "@/modules/shared/constants/mock.const";

function CartProductCardList() {
	return (
		<ul className="grid gap-y-4">
			{products.map((product) => (
				<li key={product.id}>
					<CartProductCard product={product} />
				</li>
			))}
		</ul>
	);
}

export { CartProductCardList };
