import { CartSheet } from "@/modules/cart/components/sheet/cart-sheet";

function Header() {
	return (
		<header className="sticky top-0 z-10 flex items-center justify-end gap-x-4 border-b bg-background p-4 sm:px-8">
			<CartSheet />
		</header>
	);
}

export { Header };
