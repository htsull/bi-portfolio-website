import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// import "../globals.css";

import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers/Providers";
import Header from "@/components/sections/header/Header";
import Footer from "@/components/sections/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-serif",
});
export const metadata: Metadata = {
	title: "Berthony Sully | Portfolio",
	description: "Modern & Minimalist Data Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					inter.className,
					"flex min-h-screen flex-col font-sans antialiased ",
					inter.variable,
					playfair.variable
				)}>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
