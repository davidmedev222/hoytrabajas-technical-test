import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function BudgeSection() {
	return (
		<section className="flex min-h-96 flex-col items-center justify-center gap-y-4 text-center">
			<h1 className="font-bold text-4xl tracking-tight">
				Ofertas que se ajustan a vos
			</h1>
			<p className="text-muted-foreground">
				Indicá tu presupuesto y descubrí lo que podés comprar sin pasarte del
				límite.
			</p>
			<div className="mt-8 flex items-center gap-x-2">
				<Input placeholder="$1.000.000" type="number" />
				<Button type="submit">Buscar</Button>
			</div>
		</section>
	);
}

export { BudgeSection };
