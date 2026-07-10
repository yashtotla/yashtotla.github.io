import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <section className="py-20 sm:py-28">
        <p className="text-sm text-muted-foreground">Yash Totla</p>
        <h1 className="mt-3 font-heading text-4xl font-medium tracking-tight text-balance sm:text-5xl">
          I build high-throughput, concurrent systems. Now I&rsquo;m building
          them for AI inference.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Senior backend engineer &mdash; multi-chain fintech infrastructure,
          500&nbsp;TB+/yr, exactly-once pipelines. Incoming MSCS at Georgia
          Tech, going deep on LLM inference and model serving.
        </p>
      </section>

      <section className="border-t py-16">
        <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Experience
        </h2>
        <p className="mt-4 text-muted-foreground">
          Unified experience &amp; education timeline &mdash; coming next.
        </p>
      </section>
    </div>
  )
}
