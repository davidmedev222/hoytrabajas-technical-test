import { ApplyBudgetForm } from "@/modules/budget/components/form/apply-budget-form";

function BudgetSection() {
	return (
		<section className="flex min-h-96 flex-col items-center justify-center gap-y-4 text-center">
			<h1 className="font-bold text-4xl tracking-tight">
				Ofertas que se ajustan a vos
			</h1>
			<p className="text-muted-foreground">
				Indicá tu presupuesto y descubrí lo que podés comprar sin pasarte del
				límite.
			</p>
			<ApplyBudgetForm />
		</section>
	);
}

export { BudgetSection };
