"use client"
import React from 'react'
import { c } from '../../lib/utils'

type DialogProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string
  description?: string
  footer?: React.ReactNode
}

export function Dialog({ title, description, footer, className, children, ...props }: DialogProps) {
  return (
    <div className={c('fixed inset-0 z-40 flex items-center justify-center p-4', className)} {...props}>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative w-full max-w-lg rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-xl">
        {title ? <h2 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h2> : null}
        {description ? <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p> : null}
        <div className="mt-5">{children}</div>
        {footer ? <div className="mt-6 flex justify-end gap-2 text-sm">{footer}</div> : null}
      </div>
    </div>
  )
}

export default Dialog
