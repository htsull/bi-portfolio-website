import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";
import Logo from "./logo";
import MenuSheet from "./MenuSheet";

const Header = () => {
	return (
		<header className="sticky top-0 flex dark:bg-background/95 py-2 z-50 items-center max-w-5xl drop-shadow-md bg-white/95 justify-between  border-b-2 border-white/30 w-full container">
			<div className="flex items-center w-full justify-between sm:hidden">
				<MenuSheet />
				<Logo />
				<ThemeToggle />
			</div>
			<div className="sm:flex items-center w-full justify-between hidden">
				<MenuSheet />
				<Logo />
				<Nav className="gap-6" />
				<ThemeToggle />
			</div>

		</header>
	);
};

export default Header;
