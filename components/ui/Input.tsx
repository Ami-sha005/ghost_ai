"use client"
import React from 'react'
import { c } from '../../lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
  return (
    <input className={c('w-full rounded-md border px-3 py-2 bg-transparent', className)} {...props} />
  )
}

export default Input
