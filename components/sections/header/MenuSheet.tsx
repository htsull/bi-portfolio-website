'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Nav from "./Nav"

import Logo from "./logo"
import FooterNav from "../footer/FooterNav"
import { MenuIcon } from "lucide-react"
import { useState } from "react"

const MenuSheet = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleClose = () => setIsOpen(false)
    return (
        <div className="sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="hover:text-orange-500 items-center flex border rounded-md p-0.5 hover:border-orange-500" onClick={() => setIsOpen(true)}>
                    <MenuIcon size={32} />
                    <span className="sr-only">Menu</span>
                </SheetTrigger>
                <SheetContent className="flex justify-center">
                    <SheetHeader className=" w-full">
                        <SheetTitle className="p-2.5 border-b-2 dark:border-white/20">
                            <Logo />
                        </SheetTitle>
                        <SheetDescription className="hidden">
                        </SheetDescription>
                        <Nav className="flex flex-col gap-6 pt-4 text-xl" onClick={handleClose} />
                        <FooterNav />
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MenuSheet