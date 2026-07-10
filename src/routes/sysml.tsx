import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sysml')({
  component: SysmlCorner,
})

function SysmlCorner() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <section className="py-20">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          SysML Corner
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A curated, opinionated collection on systems for ML &mdash; inference,
          model serving, and the infrastructure underneath.
        </p>
        <p className="mt-8 text-muted-foreground">Entries coming soon.</p>
      </section>
    </div>
  )
}
