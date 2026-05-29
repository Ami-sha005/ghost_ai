"use client"
import React from 'react'
import { c } from '../../lib/utils'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={c('w-full rounded-md border px-3 py-2 bg-transparent', className)} {...props} />
}

export default Textarea
