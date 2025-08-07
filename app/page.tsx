import { BudgeSection } from "@/modules/budget/components/section/budge-section";
import { ProductCardList } from "@/modules/products/components/list/product-card-list";

function HomePage() {
	return (
		<main className="grid px-4 py-8 sm:px-8 sm:py-12">
			<BudgeSection />
			<ProductCardList />
		</main>
	);
}

export default HomePage;
