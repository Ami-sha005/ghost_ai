"use client"
import React from 'react'
import { c } from '../../lib/utils'

type TabsProps = React.HTMLAttributes<HTMLDivElement>

export function Tabs({ className, children, ...props }: TabsProps) {
  return <div className={c('flex space-x-2', className)} {...props}>{children}</div>
}

export default Tabs
