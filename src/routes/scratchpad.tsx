import { createFileRoute } from '@tanstack/react-router'

import { ScratchItems } from '@/components/ScratchWall'
import { Travel } from '@/components/Travel'
import { MusicItems } from '@/components/Music'

export const Route = createFileRoute('/scratchpad')({
  component: Scratchpad,
})

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

      <section className="pb-8">
        <Travel />
      </section>

      <div className="flex flex-wrap items-start gap-4 pb-24">
        <MusicItems />
        <ScratchItems />
      </div>
    </div>
  )
}
