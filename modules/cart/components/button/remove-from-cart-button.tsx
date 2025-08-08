"use client";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Product } from "@/models/product.model";
import { revalidateCurrentCart } from "@/modules/cart/hooks/use-current-cart";
import { cartService } from "@/modules/cart/services/cart.service";

interface RemoveFromCartButtonProps {
	product: Product;
}

function RemoveFromCartButton({ product }: RemoveFromCartButtonProps) {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleRemoveFromCartButton = async () => {
		try {
			setIsDeleting(true);

			await cartService.removeProductFromCart(product.id);

			toast.success(`Producto ${product.name} eliminado del carrito`);

			await revalidateCurrentCart();
		} catch (error) {
			console.error(error);
			toast.error(`Error al eliminar el producto ${product.name} del carrito`);
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<Button
			onClick={handleRemoveFromCartButton}
			disabled={isDeleting}
			className="size-6"
			size="icon"
			variant="ghost"
		>
			<XIcon />
		</Button>
	);
}

export { RemoveFromCartButton };
