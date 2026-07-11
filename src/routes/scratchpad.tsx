import { createFileRoute } from '@tanstack/react-router'

import { ScratchWall } from '@/components/ScratchWall'
import { Travel } from '@/components/Travel'

export const Route = createFileRoute('/scratchpad')({
  component: Scratchpad,
})

const sectionLabel =
  'text-sm font-medium tracking-wide text-muted-foreground uppercase'

function Scratchpad() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <section className="py-16 sm:py-20">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Scratchpad
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          A wall of whatever I&rsquo;m thinking about — things I&rsquo;ve built,
          links, images, clips, half-thoughts. Unpolished by design.
        </p>
      </section>

      <section className="pb-12">
        <h2 className={sectionLabel}>Where I&rsquo;ve been</h2>
        <div className="mt-6">
          <Travel />
        </div>
      </section>

      <div className="pb-24">
        <ScratchWall />
      </div>
    </div>
  )
}
