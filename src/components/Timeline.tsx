import type { ReactNode } from 'react'

import { experience, type TimelineEntry } from '@/data/experience'
import { cn } from '@/lib/utils'

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
      {children}
    </span>
  )
}

function Entry({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="relative pb-10 pl-7 last:pb-0 sm:pl-8">
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-1 -left-[5px] size-2.5 rounded-full ring-4 ring-background',
          entry.upcoming
            ? 'border-2 border-muted-foreground bg-background'
            : 'bg-foreground',
        )}
      />

      <p className="text-xs tabular-nums text-muted-foreground">{entry.period}</p>
      <h3 className="mt-1 font-heading text-base font-medium">
        {entry.role}
        <span className="text-muted-foreground"> · {entry.org}</span>
      </h3>
      {entry.location ? (
        <p className="text-sm text-muted-foreground">{entry.location}</p>
      ) : null}
      {entry.context ? (
        <p className="mt-2 text-sm text-muted-foreground">{entry.context}</p>
      ) : null}

      {entry.points ? (
        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-foreground/80 marker:text-muted-foreground/40">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}

      {entry.tags ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      ) : null}

      {entry.concurrent ? (
        <div className="mt-4 border-l border-dashed border-border pl-4">
          {entry.concurrent.label ? (
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {entry.concurrent.label}
            </p>
          ) : null}
          <ul className="mt-2 space-y-1 text-sm">
            {entry.concurrent.items.map((item) => (
              <li key={item.title + (item.detail ?? '')}>
                <span className="text-foreground/80">{item.title}</span>
                {item.detail ? (
                  <span className="text-muted-foreground"> — {item.detail}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  )
}

export function Timeline() {
  return (
    <ol className="relative ml-1 border-l border-border">
      {experience.map((entry) => (
        <Entry key={entry.org + entry.period} entry={entry} />
      ))}
    </ol>
  )
}
