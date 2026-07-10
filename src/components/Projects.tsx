import { ArrowUpRight } from 'lucide-react'

import { projects } from '@/data/projects'

export function Projects() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-lg border p-4 transition-colors hover:bg-muted/40"
        >
          <div className="flex items-center gap-1.5">
            <h3 className="font-heading font-medium">{project.name}</h3>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
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
        </a>
      ))}
    </div>
  )
}
