"use client"

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { c } from '@/lib/utils'

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex h-14 items-center justify-between bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] px-4 shadow-sm">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleSidebar}
          className={c(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-primary)] transition hover:bg-[var(--bg-subtle)]',
          )}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
        </button>
      </div>
      <div className="flex-1 text-center text-sm font-medium text-[var(--text-secondary)]">Editor</div>
      <div className="w-10" />
    </header>
  )
}

export default EditorNavbar
