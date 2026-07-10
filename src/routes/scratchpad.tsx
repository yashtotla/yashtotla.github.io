import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/scratchpad')({
  component: Scratchpad,
})

function Scratchpad() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <section className="py-20">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Scratchpad
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A wall of whatever I&rsquo;m thinking about &mdash; images, links,
          videos, notes. Unpolished by design.
        </p>
        <p className="mt-8 text-muted-foreground">Nothing pinned yet.</p>
      </section>
    </div>
  )
}
