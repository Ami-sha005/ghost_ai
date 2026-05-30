"use client"
import React from 'react'
import { c } from '../../lib/utils'

type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement>

export function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
  return (
    <div className={c('overflow-auto', className)} {...props}>
      {children}
    </div>
  )
}

export default ScrollArea
