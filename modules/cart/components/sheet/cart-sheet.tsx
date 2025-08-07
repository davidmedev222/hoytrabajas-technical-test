"use client";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import type { Product } from "@/models/product.model";
import { CartProductCardList } from "@/modules/cart/components/list/cart-product-card-list";
import { products } from "@/modules/shared/constants/mock.const";

const cart: Product[] = products;

function CartSheet() {
	const hasProducts = cart.length > 0;

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<ShoppingBagIcon />
				</Button>
			</SheetTrigger>
			<SheetContent className="w-full">
				<SheetHeader>
					<SheetTitle>
						{hasProducts ? "Tu carrito" : "Carrito vacío"}
					</SheetTitle>
					<SheetDescription>
						{hasProducts
							? "Aquí puedes ver los productos que has agregado a tu carrito."
							: "No hay productos en tu carrito. Agrega algunos para continuar."}
					</SheetDescription>
				</SheetHeader>
				{hasProducts && (
					<div className="overflow-y-auto px-4">
						<CartProductCardList />
					</div>
				)}
				<SheetFooter>
					<SheetClose asChild>
						<Button>
							{hasProducts ? "Ver más productos" : "Ver productos"}
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export { CartSheet };
