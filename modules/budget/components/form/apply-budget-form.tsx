"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	type ApplyBudgetSchema,
	applyBudgetSchema,
} from "@/modules/budget/schemas/apply-budget.schema";

function ApplyBudgetForm() {
	const router = useRouter();
	const pathname = usePathname();

	const form = useForm<ApplyBudgetSchema>({
		resolver: zodResolver(applyBudgetSchema),
		defaultValues: {
			budget: undefined,
		},
	});

	const onSubmit = (values: ApplyBudgetSchema) => {
		try {
			router.push(
				`${pathname}${values.budget ? `?budget=${values.budget}` : ""}`,
				{ scroll: false },
			);

			toast.success("Presupuesto aplicado con éxito");
		} catch (error) {
			console.error(error);
			toast.error("Error al aplicar el presupuesto");
		}
	};

	const handleOnChangeBudget = (value: number) => {
		const parsedValue = applyBudgetSchema.safeParse({ budget: value });
		if (!parsedValue.success) return;

		form.setValue("budget", value, { shouldValidate: true });
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="mt-8 flex items-center gap-x-2"
			>
				<FormField
					control={form.control}
					name="budget"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="1000"
									type="number"
									{...field}
									onChange={(e) => {
										const value = Number(e.target.value);
										handleOnChangeBudget(value);
									}}
									value={field.value ?? ""}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button variant="outline" type="submit">
					Buscar
				</Button>
			</form>
		</Form>
	);
}

export { ApplyBudgetForm };
