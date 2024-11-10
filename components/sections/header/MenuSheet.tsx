'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import Nav from './Nav'

import Logo from './logo'
import FooterNav from '../footer/FooterNav'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'

const MenuSheet = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClose = () => setIsOpen(false)
  return (
    <div className='sm:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          className='hover: flex items-center rounded-md border p-0.5 hover:border-orange-500'
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon size={32} />
          <span className='sr-only'>Menu</span>
        </SheetTrigger>
        <SheetContent className='flex max-h-screen justify-center'>
          <SheetHeader className='group w-full justify-between'>
            <SheetTitle className='border-b-2 p-2.5 dark:border-white/20'>
              <Logo />
            </SheetTitle>
            <SheetDescription className='hidden'></SheetDescription>
            <Nav
              className='flex flex-col gap-6 text-xl'
              onClick={handleClose}
            />
            <div className='last:pb-10'>
              <FooterNav />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuSheet
