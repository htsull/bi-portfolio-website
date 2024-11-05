"use client";
import { Button } from "../../ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
	const { setTheme, resolvedTheme } = useTheme();
	return (
		<div className="flex items-center">
			<Button
				className="border hover:bg-transparent! hover:text-orange-500 hover:border-orange-500"
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

export default ThemeToggler;
