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
import { CartProductCardList } from "@/modules/cart/components/list/cart-product-card-list";

function CartSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<ShoppingBagIcon />
				</Button>
			</SheetTrigger>
			<SheetContent className="w-full">
				<SheetHeader>
					<SheetTitle>Tu carrito</SheetTitle>
					<SheetDescription>
						Aquí puedes ver los productos que has agregado a tu carrito.
					</SheetDescription>
				</SheetHeader>
				<div className="overflow-y-auto px-4">
					<CartProductCardList />
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Ver más productos</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export { CartSheet };
