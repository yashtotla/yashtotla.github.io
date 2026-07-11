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

      <div className="space-y-12 pb-24">
        {resourceGroups.map((group) => (
          <section key={group.topic}>
            <h2 className={sectionLabel}>{group.topic}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {group.items.map((resource) => {
                const Icon = kindIcon[resource.kind] ?? LinkIcon
                return (
                  <a
                    key={resource.href}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/40"
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{resource.title}</span>
                        <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {resource.source}
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {resource.note}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
