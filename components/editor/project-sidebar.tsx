"use client"

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Tabs } from '@/components/ui/Tabs'
import { c } from '@/lib/utils'

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  const [activeTab, setActiveTab] = useState<'my-projects' | 'shared'>('my-projects')

  return (
    <aside
      className={c(
        'fixed inset-y-0 left-0 z-30 flex w-80 max-w-full flex-col border-r border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
      aria-hidden={!isOpen}
    >
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">Projects</p>
          <p className="text-xs text-[var(--text-secondary)]">Manage workspaces and shared views</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
          aria-label="Close sidebar"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex flex-col gap-3 px-4 py-4">
        <Tabs className="overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('my-projects')}
            className={c(
              'rounded-full px-3 py-2 text-sm font-medium transition',
              activeTab === 'my-projects'
                ? 'bg-[var(--accent-primary-dim)] text-[var(--accent-primary)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
            )}
          >
            My Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('shared')}
            className={c(
              'rounded-full px-3 py-2 text-sm font-medium transition',
              activeTab === 'shared'
                ? 'bg-[var(--accent-primary-dim)] text-[var(--accent-primary)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
            )}
          >
            Shared
          </button>
        </Tabs>

        <div className="flex-1 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-base)] p-5 text-sm text-[var(--text-secondary)]">
          <p className="font-semibold text-[var(--text-primary)]">{activeTab === 'my-projects' ? 'My Projects' : 'Shared projects'}</p>
          <div className="mt-6 flex h-56 items-center justify-center rounded-2xl border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-center">
            <div>
              <p className="mb-2 text-sm text-[var(--text-secondary)]">No projects yet.</p>
              <p className="text-xs text-[var(--text-faint)]">Create a new project to get started.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-[var(--border-subtle)] px-4 py-4">
        <Button type="button" className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent-primary)] px-4 py-3 text-sm text-black hover:opacity-90">
          <Plus size={16} />
          New Project
        </Button>
      </div>
    </aside>
  )
}

export default ProjectSidebar
