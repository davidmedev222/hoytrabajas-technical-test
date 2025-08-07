import { CartSheet } from "@/modules/cart/components/sheet/cart-sheet";

function Header() {
	return (
		<header className="flex items-center justify-end gap-x-4 border-b p-4 sm:px-8">
			<CartSheet />
		</header>
	);
}

export { Header };
