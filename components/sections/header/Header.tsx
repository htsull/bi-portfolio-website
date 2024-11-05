import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";
import Logo from "./logo";
import MenuSheet from "./MenuSheet";

const Header = () => {
	return (
		<header className="container sticky top-0 flex dark:bg-background py-2 z-50 border-b-2 bg-white/90 max-w-5xl">
			<div className="flex items-center w-full justify-between sm:hidden">
				<MenuSheet />
				<Logo />
				<ThemeToggle />
			</div>
			<div className="sm:flex items-center w-full justify-between hidden">
				<MenuSheet />
				<Logo />
				<Nav className=" gap-6" />
				<ThemeToggle />
			</div>

		</header>
	);
};

export default Header;
