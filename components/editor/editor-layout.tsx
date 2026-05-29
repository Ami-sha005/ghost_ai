"use client"

import { ReactNode, useState } from 'react'
import { EditorNavbar } from './editor-navbar'
import { ProjectSidebar } from './project-sidebar'

interface EditorLayoutProps {
  children: ReactNode
}

export function EditorLayout({ children }: EditorLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <ProjectSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <EditorNavbar isSidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen((open) => !open)} />

      <main className="pt-14">
        <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-7xl flex-col gap-6 px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  )
}

export default EditorLayout
