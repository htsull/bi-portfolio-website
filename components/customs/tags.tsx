import { cn } from '@/lib/utils'
import React from 'react'

type tagsProps = {
  className?: string
  children: React.ReactNode
}
const Tags = ({ className, children }: tagsProps) => {
  return (
    <span
      className={cn(
        className,
        `text-custom-primary rounded-full bg-black/5 px-2 py-1 font-bold`
      )}
    >
      {children}
    </span>
  )
}

export default Tags
