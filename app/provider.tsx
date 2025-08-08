"use client";
import { Toaster } from "@/components/ui/sonner";

interface RootProviderProps {
	children: React.ReactNode;
}

function RootProvider({ children }: RootProviderProps) {
	return (
		<>
			{children}
			<Toaster position="bottom-right" expand />
		</>
	);
}

export { RootProvider };
