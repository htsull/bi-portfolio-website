import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Nav from "./Nav"
import Logo from "./logo"
import FooterNav from "../footer/FooterNav"

const MenuSheet = () => {
    return (
        <div className="sm:hidden">
            <Sheet>
                <SheetTrigger className="hover:text-orange-500 ">
                    <MenuIcon />
                    <span className="sr-only">Menu</span>
                </SheetTrigger>
                <SheetContent className="flex justify-center">
                    <SheetHeader className="border w-full">
                        <SheetTitle className="mb-8 border-b-2 mt-[.9rem]"><Logo /></SheetTitle>
                        <SheetDescription className="hidden">
                        </SheetDescription>
                        <Nav className="flex flex-col gap-6 text-xl" />
                        <FooterNav />
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MenuSheet