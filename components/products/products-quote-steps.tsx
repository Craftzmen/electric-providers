import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const steps = [
  {
    title: "Tell us about the work",
    description: "Pipe or cable, locating or inspection, usual depths, and the frequencies your crew already uses.",
  },
  {
    title: "We build the kit",
    description: "Receiver, transmitter, sonde, or camera, with clamps, bags, and spares listed line by line.",
  },
  {
    title: "You get a written quote",
    description: "Itemized pricing, lead time, and warranty terms by email. Nothing ships until you approve it in writing.",
  },
] as const

export function ProductsQuoteSteps() {
  return (
    <SectionWrapper background="white">
      <PageSectionHeader
        eyebrow="Quotes"
        title="How an equipment quote works"
        action={
          <Link
            href="/contact?topic=equipment"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-forest px-5 text-sm font-semibold text-white transition hover:bg-forest-soft"
          >
            Ask for a quote
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        }
      />
      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="relative rounded-2xl border border-forest/10 p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-lime font-display text-lg font-bold text-forest">
                {index + 1}
              </span>
              {index < steps.length - 1 ? <span className="hidden h-px flex-1 bg-forest/15 md:block" aria-hidden /> : null}
            </div>
            <h3 className="mt-6 font-display text-xl font-bold text-forest">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest/70">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
