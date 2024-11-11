import ThemeToggle from './ThemeToggle'
import Nav from './Nav'
import Logo from './logo'
import MenuSheet from './MenuSheet'

const Header = () => {
  return (
    <header className='container sticky top-0 z-50 flex w-full max-w-5xl items-center justify-between border-b-2 border-white/30 bg-white/95 py-2 drop-shadow-md dark:bg-background/95'>
      <div className='flex w-full items-center justify-between sm:hidden'>
        <MenuSheet />
        <Logo />
        <ThemeToggle />
      </div>
      <div className='hidden w-full items-center justify-between sm:flex'>
        <MenuSheet />
        <Logo />
        <Nav className='gap-6' />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
