import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Library,
  Link as LinkIcon,
  List,
  MousePointerClick,
  PenLine,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react'

import { resourceGroups } from '@/data/sysml'

export const Route = createFileRoute('/sysml')({
  component: SysmlCorner,
})

const sectionLabel =
  'text-sm font-medium tracking-wide text-muted-foreground uppercase'

const kindIcon: Record<string, LucideIcon> = {
  blog: PenLine,
  article: FileText,
  book: BookOpen,
  guide: BookOpen,
  channel: Video,
  interactive: MousePointerClick,
  collection: Library,
  community: Users,
  'X list': List,
}

function SysmlCorner() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <section className="py-16 sm:py-20">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          SysML Corner
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          A curated, opinionated collection on systems for ML &mdash; inference,
          model serving, and the infrastructure underneath.
        </p>
      </section>

      <div className="space-y-10 pb-24">
        {resourceGroups.map((group) => (
          <section key={group.topic}>
            <h2 className={sectionLabel}>{group.topic}</h2>
            <div className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {group.items.map((resource) => {
                const Icon = kindIcon[resource.kind] ?? LinkIcon
                return (
                  <div key={resource.href} className="flex gap-2.5">
                    <Icon className="mt-1 size-3.5 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="text-sm leading-snug">
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group font-medium underline-offset-4 hover:underline"
                        >
                          {resource.title}
                          <ArrowUpRight className="ml-0.5 inline size-3 -translate-y-px text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                        <span className="text-muted-foreground">
                          {' · '}
                          {resource.source}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {resource.note}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
