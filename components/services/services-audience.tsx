import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { audienceCards } from "@/lib/services-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ServicesAudience() {
  return (
    <SectionWrapper background="white">
      <PageSectionHeader
        eyebrow="Homes and businesses"
        title="Built for how you use power"
        description="The same honest pricing, tuned to different needs."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {audienceCards.map((card) => {
          const dark = card.tone === "dark"
          return (
            <div
              key={card.title}
              className={cn("flex flex-col rounded-2xl p-8 md:p-10", dark ? "bg-forest text-white" : "bg-cream text-forest")}
            >
              <h3 className="font-display text-3xl font-bold">{card.title}</h3>
              <ul className="mt-6 flex-1 space-y-3">
                {card.points.map((point) => (
                  <li key={point} className={cn("flex items-start gap-3 text-sm", dark ? "text-white/80" : "text-forest/80")}>
                    <CheckIcon className={cn("mt-0.5 size-4 shrink-0", dark ? "text-lime" : "text-moss")} aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={card.href}
                className={cn(
                  "mt-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg px-6 text-sm font-semibold transition",
                  dark ? "bg-lime text-forest hover:bg-lime-soft" : "bg-forest text-white hover:bg-forest-soft"
                )}
              >
                {card.cta}
                <ArrowRightIcon className="size-4" aria-hidden />
              </Link>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
