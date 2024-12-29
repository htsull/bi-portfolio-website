import { cn } from '@/lib/utils'

type customHeadingProps = {
  children: React.ReactNode
  className?: string
}

const CustomHeading = ({ children, className }: customHeadingProps) => {
  return (
    <h1
      className={cn(
        `my-4 flex justify-center text-wrap text-center font-serif text-2xl font-bold text-custom-primary dark:text-custom-primary md:text-4xl`,
        className
      )}
    >
      {children}
    </h1>
  )
}

export default CustomHeading
