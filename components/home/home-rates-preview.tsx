import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { audienceLabel, formatFee, plans, rateDisclosure } from "@/lib/rates-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomeRatesPreview() {
  return (
    <SectionWrapper background="cream">
      <PageSectionHeader
        eyebrow="Sample pricing"
        title="Simple prices you can actually compare"
        description="Every plan shows the supply price, the term, and any cancellation fee up front. Delivery charges from your utility are separate."
        action={
          <Link
            href="/plans"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-forest/15 bg-white px-5 text-sm font-semibold text-forest transition hover:border-forest"
          >
            Compare every plan
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.slug}
            className={cn(
              "relative flex flex-col rounded-2xl p-7",
              plan.featured ? "bg-forest text-white" : "bg-white text-forest"
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  plan.featured ? "bg-white/10 text-lime" : "bg-mint text-moss"
                )}
              >
                {audienceLabel[plan.audience]}
              </span>
              {plan.featured ? <span className="text-xs font-semibold text-lime">Most chosen</span> : null}
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">{plan.name}</h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-5xl font-extrabold tracking-[-0.04em]">{plan.rateCentsPerKwh.toFixed(1)}¢</span>
              <span className={cn("text-sm", plan.featured ? "text-white/60" : "text-forest/55")}>/kWh</span>
            </p>
            <ul className={cn("mt-6 space-y-2 text-sm", plan.featured ? "text-white/80" : "text-forest/75")}>
              <li className="flex gap-2">
                <CheckIcon className={cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-lime" : "text-moss")} aria-hidden />
                {plan.termMonths}-month locked price
              </li>
              <li className="flex gap-2">
                <CheckIcon className={cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-lime" : "text-moss")} aria-hidden />
                Cancellation fee: {formatFee(plan.earlyTerminationFee)}
              </li>
              <li className="flex gap-2">
                <CheckIcon className={cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-lime" : "text-moss")} aria-hidden />
                {plan.renewablePct > 0 ? `${plan.renewablePct}% renewable match` : plan.gasIncluded ? "Electricity and gas together" : "Multi-location invoicing"}
              </li>
            </ul>
            <Link
              href={`/plans?audience=${plan.audience}#${plan.slug}`}
              className={cn(
                "mt-8 inline-flex min-h-11 items-center justify-center rounded-lg text-sm font-semibold transition",
                plan.featured ? "bg-lime text-forest hover:bg-lime-soft" : "bg-cream text-forest hover:bg-mint"
              )}
            >
              View details
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-forest/55">{rateDisclosure}</p>
    </SectionWrapper>
  )
}
