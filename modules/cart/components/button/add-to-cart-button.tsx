"use client";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Product } from "@/models/product.model";
import {
	revalidateCurrentCart,
	useCurrentCart,
} from "@/modules/cart/hooks/use-current-cart";
import { cartService } from "@/modules/cart/services/cart.service";

interface AddToCartButtonProps {
	product: Product;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
	const { data: currentCart, isLoading: isLoadingCurrentCart } =
		useCurrentCart();
	const [isAdding, setIsAdding] = useState(false);

	const isProductInCart = currentCart?.some((item) => item.id === product.id);

	const handleAddProductToCart = async () => {
		try {
			if (isProductInCart || isLoadingCurrentCart) return;

			setIsAdding(true);

			await cartService.addProductToCart(product.id);

			toast.success(`Producto ${product.name} agregado al carrito`);

			await revalidateCurrentCart();
		} catch (error) {
			console.error(error);
			toast.error(`Error al agregar el producto ${product.name} al carrito`);
		} finally {
			setIsAdding(false);
		}
	};

	return (
		<Button
			onClick={handleAddProductToCart}
			disabled={isAdding || isProductInCart}
		>
			{isAdding ? (
				<LoaderIcon className="animate-spin" />
			) : (
				"Agregar al carrito"
			)}
		</Button>
	);
}

export { AddToCartButton };
