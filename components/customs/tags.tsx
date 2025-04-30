import { cn } from '@/lib/utils'
import React from 'react'

type tagsProps = {
  className?: string
  children: React.ReactNode
}
const Tags = ({ className, children }: tagsProps) => {
  return (
    <span
      className={cn(className, `px-2 py-1 font-semibold text-custom-primary`)}
    >
      {children}
    </span>
  )
}

export default Tags
