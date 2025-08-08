import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/modules/layout/header/header";
import { RootProvider } from "./provider";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "David Mamani | hoytrabajas.com",
	description: "Technical test for hoytrabajas.com",
	openGraph: {
		type: "website",
		title: "David Mamani | hoytrabajas.com",
		description: "Technical test for hoytrabajas.com",
		url: "https://hoytrabajas-technical-test.vercel.app",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={cn(
					inter.variable,
					"flex min-h-dvh flex-col font-inter antialiased",
				)}
			>
				<RootProvider>
					<Header />
					{children}
				</RootProvider>
			</body>
		</html>
	);
}

export default RootLayout;
