import { createFileRoute } from '@tanstack/react-router'

import { Timeline } from '@/components/Timeline'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <section className="py-16 sm:py-20">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Yash Totla
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Backend and distributed-systems engineer. I have spent the last
          several years building high-throughput, concurrent data infrastructure
          in fintech, and I am heading to Georgia Tech for an MSCS focused on
          systems for AI &mdash; LLM inference and model serving.
        </p>
      </section>

      <section className="pb-24">
        <Timeline />
      </section>
    </div>
  )
}
