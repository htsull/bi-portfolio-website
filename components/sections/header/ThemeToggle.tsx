'use client'
import { Button } from '../../ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex items-center'>
      <Button
        className='hover:bg-transparent! hover: border hover:border-orange-500'
        size={'sm'}
        variant={'ghost'}
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }}
      >
        {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </Button>
    </div>
  )
}

export default ThemeToggler
