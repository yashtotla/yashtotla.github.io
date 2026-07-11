import { createFileRoute } from '@tanstack/react-router'

import { Timeline } from '@/components/Timeline'
import { Projects } from '@/components/Projects'
import { SocialLinks } from '@/components/SocialLinks'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const sectionLabel =
  'text-sm font-medium tracking-wide text-muted-foreground uppercase'

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
        <SocialLinks className="mt-6" />
      </section>

      <section>
        <h2 className={sectionLabel}>Experience</h2>
        <div className="mt-8">
          <Timeline />
        </div>
      </section>

      <section className="mt-16 border-t pt-16 pb-24">
        <h2 className={sectionLabel}>Projects</h2>
        <div className="mt-6">
          <Projects />
        </div>
      </section>
    </div>
  )
}
