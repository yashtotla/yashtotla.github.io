import { ArrowUpRight } from 'lucide-react'

import { projects } from '@/data/projects'

export function Projects() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.name}
          className="group relative rounded-lg border p-4 transition-colors hover:bg-muted/40"
        >
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 after:absolute after:inset-0"
          >
            <h3 className="font-heading font-medium">{project.name}</h3>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-1.5 text-sm text-muted-foreground">{project.blurb}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.links ? (
            <div className="relative mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-foreground/80 underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/link:opacity-100" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
