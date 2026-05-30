import Link from 'next/link'
import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/ui/themes'

const appearance = {
  theme: dark,
  variables: {
    colorPrimary: 'var(--accent-primary)',
    colorText: 'var(--text-primary)',
    colorTextSecondary: 'var(--text-secondary)',
    colorBackground: 'var(--bg-base)',
    colorSurface: 'var(--bg-surface)',
    colorBorder: 'var(--border-default)',
    colorInputBackground: 'var(--bg-elevated)',
    colorInputText: 'var(--text-primary)',
    colorInputPlaceholder: 'var(--text-muted)',
    colorError: 'var(--state-error)',
    colorSuccess: 'var(--state-success)',
  },
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2">
        <aside className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--border-default)] bg-[linear-gradient(135deg,rgba(10,16,46,0.96),rgba(5,9,24,0.96))] p-10 text-[var(--text-primary)] shadow-[0_35px_90px_-55px_rgba(100,87,249,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(100,87,249,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,200,212,0.18),transparent_22%)]" />
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(100,87,249,0.12)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--accent-ai)]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-ai)] text-xs font-semibold text-[var(--bg-base)]">
                G
              </span>
              Ghost AI
            </div>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl">
              Design systems at the speed of thought.
            </h1>
            <p className="max-w-lg text-base leading-8 text-[var(--text-secondary)]">
              Describe your architecture in plain English. Ghost AI maps it to a shared canvas your whole team can refine in real time.
            </p>
          </div>

          <ul className="relative space-y-4 text-sm text-[var(--text-secondary)]">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-ai)]" />
              AI Architecture Generation — Describe your system, AI maps it to nodes and edges on a live canvas.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-ai)]" />
              Real-time Collaboration — Live cursors, presence indicators, and shared node editing across your team.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-ai)]" />
              Instant Spec Generation — Export a complete Markdown technical spec directly from the canvas graph.
            </li>
          </ul>

          <p className="relative text-sm text-[var(--text-faint)]">© 2026 Ghost AI. All rights reserved.</p>
        </aside>

        <main className="flex items-center justify-center px-4">
          <div className="w-full max-w-md rounded-[2rem] border border-[var(--border-default)] bg-[var(--bg-surface)] p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)]">
            <div className="mb-8 space-y-3 text-center">
              <span className="text-xs uppercase tracking-[0.32em] text-[var(--text-faint)]">Create your Ghost AI account</span>
              <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Get started</h2>
              <p className="text-sm text-[var(--text-secondary)]">Create an account and get back to your workspace.</p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-6 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.5)]">
              <SignUp appearance={appearance} routing="hash" />
            </div>
            <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
              Already have an account?{' '}
              <Link className="font-medium text-[var(--accent-primary)]" href="/sign-in">
                Sign in
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
