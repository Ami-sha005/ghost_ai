"use client"
import React from 'react'
import { c } from '../../lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={c('inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors', className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
