import { ArrowUpRight } from 'lucide-react'

import { scratchItems, type ScratchItem } from '@/data/scratchpad'

const cardLink =
  'group block rounded-lg border p-4 transition-colors hover:bg-muted/40'

function Arrow() {
  return (
    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  )
}

function Card({ item }: { item: ScratchItem }) {
  switch (item.type) {
    case 'link':
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardLink}>
          <div className="flex items-center gap-1.5">
            <span className="font-medium">{item.title}</span>
            <Arrow />
          </div>
          {item.source ? (
            <p className="mt-0.5 text-xs text-muted-foreground">{item.source}</p>
          ) : null}
          {item.note ? (
            <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
          ) : null}
        </a>
      )
    case 'note':
      return (
        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="text-sm text-foreground/80">{item.text}</p>
          {item.author ? (
            <p className="mt-2 text-xs text-muted-foreground">— {item.author}</p>
          ) : null}
        </div>
      )
    case 'image':
      return (
        <figure className="overflow-hidden rounded-lg border">
          <img src={item.src} alt={item.alt} loading="lazy" className="w-full" />
          {item.caption ? (
            <figcaption className="p-3 text-xs text-muted-foreground">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      )
    case 'video':
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardLink}>
          <div className="flex items-center gap-1.5">
            <span className="font-medium">{item.title}</span>
            <Arrow />
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {item.source ? `${item.source} · video` : 'video'}
          </p>
        </a>
      )
    case 'tweet':
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardLink}>
          <p className="text-sm text-foreground/80">{item.text}</p>
          <p className="mt-2 text-xs text-muted-foreground">{item.author} · on X</p>
        </a>
      )
  }
}

export function ScratchItems() {
  return (
    <>
      {scratchItems.map((item, index) => (
        <div key={`${item.type}-${index}`} className="w-56 max-w-full">
          <Card item={item} />
        </div>
      ))}
    </>
  )
}
