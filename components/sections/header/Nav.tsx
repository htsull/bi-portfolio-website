import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type NavProps = {
	className?: string;
};

const Nav: React.FC<NavProps> = ({ className }) => {
	return (
		<nav>
			<ul className={cn(className, "navlinks")}>
				<li className="transition hover:text-orange-500">
					<Link href="#about">about me</Link>
				</li>
				<li className="transition hover:text-orange-500">
					<Link href="#skills">skills</Link>
				</li>
				<li className="transition hover:text-orange-500">
					<Link href="#projects">projects</Link>
				</li>
				<li className="transition hover:text-orange-500">
					<Link href="#contact">contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
