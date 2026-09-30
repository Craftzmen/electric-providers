import { CheckIcon } from "lucide-react"

type PolicySummaryCalloutProps = {
  title?: string
  highlights: string[]
}

export function PolicySummaryCallout({ title = "The short version", highlights }: PolicySummaryCalloutProps) {
  return (
    <section className="bg-white px-5 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto max-w-[1240px] rounded-2xl bg-mint p-7 md:p-10">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <h2 className="font-display text-2xl font-bold text-forest">{title}</h2>
          <p className="text-xs text-forest/55">A quick summary for convenience. The full text below is what applies.</p>
        </div>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-forest/80">
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-lime">
                <CheckIcon className="size-3 text-forest" aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
