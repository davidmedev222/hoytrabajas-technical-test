import { Suspense } from "react";
import { BudgetSection } from "@/modules/budget/components/section/budge-section";
import {
	ProductCardList,
	ProductCardListSkeleton,
} from "@/modules/products/components/list/product-card-list";

function HomePage() {
	return (
		<main className="grid px-4 py-8 sm:px-8 sm:py-12">
			<BudgetSection />
			<Suspense fallback={<ProductCardListSkeleton />}>
				<ProductCardList />
			</Suspense>
		</main>
	);
}

export default HomePage;
