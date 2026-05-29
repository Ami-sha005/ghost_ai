"use client"
import React from 'react'
import { c } from '../../lib/utils'

type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={c('rounded-lg border p-4 bg-transparent', className)} {...props}>
      {children}
    </div>
  )
}

export default Card
