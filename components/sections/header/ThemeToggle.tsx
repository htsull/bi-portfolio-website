"use client";
import { Button } from "../../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const themeToggler = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="flex items-center">
			<Button
				className="border hover:text-orange-500 hover:border-orange-500"
				size={"sm"}
				variant={"ghost"}
				onClick={() => {
					setTheme(resolvedTheme === "dark" ? "light" : "dark");
				}}>
				{resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
			</Button>

		</div>
	);
};

export default themeToggler;
