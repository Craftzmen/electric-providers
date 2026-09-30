import Link from "next/link"
import { ArrowRightIcon, ClipboardListIcon } from "lucide-react"
import { homeSwitchNeeds, homeSwitchSteps } from "@/lib/home-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomeSwitching() {
  return (
    <SectionWrapper background="white">
      <PageSectionHeader
        eyebrow="How It Works"
        title="Four steps. No technician. No downtime."
        description="Your utility still delivers the power and answers outage calls. We simply take over the supply price on your bill."
        align="center"
      />

      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
        <span className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-gradient-to-r from-lime via-moss to-forest md:block" aria-hidden />
        {homeSwitchSteps.map((step, index) => (
          <li key={step.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
            <span className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-forest font-display text-xl font-bold text-lime shadow-md">
              {index + 1}
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-forest md:mt-5">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/65">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 flex flex-col gap-6 rounded-2xl bg-mint p-7 md:flex-row md:items-center md:justify-between md:p-9">
        <div className="flex items-start gap-4">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-moss">
            <ClipboardListIcon className="size-5" aria-hidden />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold text-forest">Have these handy</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {homeSwitchNeeds.map((item) => (
                <li key={item} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-forest/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          href="/how-it-works"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-lg bg-forest px-5 text-sm font-semibold text-white transition hover:bg-forest-soft md:self-center"
        >
          The full timeline
          <ArrowRightIcon className="size-4" aria-hidden />
        </Link>
      </div>
    </SectionWrapper>
  )
}
