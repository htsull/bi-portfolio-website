import { cn } from '@/lib/utils'

type customHeadingProps = {
  children: React.ReactNode
  className?: string
}

const CustomHeading = ({ children, className }: customHeadingProps) => {
  return (
    <h1
      className={cn(
        `text-custom-primary dark:text-custom-primary my-4 flex justify-center text-center font-serif text-2xl font-bold`,
        className
      )}
    >
      {children}
    </h1>
  )
}

export default CustomHeading
