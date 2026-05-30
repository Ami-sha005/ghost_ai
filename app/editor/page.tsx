import { EditorLayout } from '@/components/editor/editor-layout'

export default function EditorPage() {
  return (
    <EditorLayout>
      <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">Welcome to Ghost AI</h1>
        <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
          This editor shell includes the top navbar and floating project sidebar pattern specified in the editor feature spec.
        </p>
      </div>

      <div className="flex-1 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-base)] p-8 text-[var(--text-secondary)]">
        <p className="text-sm">
          Open the sidebar using the navbar button. The canvas area remains fixed while the sidebar floats on top.
        </p>
      </div>
    </EditorLayout>
  )
}
