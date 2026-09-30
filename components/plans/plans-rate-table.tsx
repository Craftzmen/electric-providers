import Link from "next/link"
import { CheckIcon, MapPinIcon } from "lucide-react"
import {
  audienceLabel,
  formatCurrency,
  formatFee,
  planTypeLabel,
  plans,
  rateDisclosure,
  type PlanAudience,
} from "@/lib/rates-content"
import { cn } from "@/lib/utils"
import { SectionWrapper } from "@/components/layout/section-wrapper"

type PlansRateTableProps = {
  audience?: PlanAudience
  zip?: string
}

const filters: { label: string; value?: PlanAudience }[] = [
  { label: "All plans" },
  { label: "For homes", value: "residential" },
  { label: "For businesses", value: "business" },
]

export function PlansRateTable({ audience, zip }: PlansRateTableProps) {
  const visible = audience ? plans.filter((plan) => plan.audience === audience) : plans

  return (
    <SectionWrapper background="white" className="pt-4 md:pt-6">
      <div className="flex flex-col items-center gap-4">
        <nav aria-label="Filter plans by customer type" className="inline-flex rounded-xl bg-cream p-1.5">
          {filters.map((filter) => {
            const params = new URLSearchParams()
            if (filter.value) params.set("audience", filter.value)
            if (zip) params.set("zip", zip)
            const query = params.toString()
            const active = filter.value === audience
            return (
              <Link
                key={filter.label}
                href={query ? `/plans?${query}` : "/plans"}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-lg px-4 text-sm font-semibold transition sm:px-6",
                  active ? "bg-forest text-white shadow" : "text-forest/65 hover:text-forest"
                )}
              >
                {filter.label}
              </Link>
            )
          })}
        </nav>
        {zip ? (
          <p className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm text-forest/80">
            <MapPinIcon className="size-4 text-moss" aria-hidden />
            Prices for ZIP <span className="font-semibold text-forest">{zip}</span>
            <Link href="/plans" className="font-semibold text-forest underline underline-offset-4">
              Change
            </Link>
          </p>
        ) : null}
      </div>

      <div className={cn("mt-10 grid gap-5 md:grid-cols-2", visible.length > 2 && "xl:grid-cols-4")}>
        {visible.map((plan) => {
          const featured = plan.featured
          return (
            <article
              key={plan.slug}
              className={cn(
                "relative flex flex-col rounded-2xl border p-7",
                featured ? "border-forest bg-forest text-white shadow-2xl xl:-translate-y-3" : "border-forest/10 bg-white text-forest"
              )}
            >
              {featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-lime px-3 py-1 text-xs font-bold text-forest">Most chosen</span>
              ) : null}
              <p className={cn("text-xs font-semibold", featured ? "text-lime" : "text-moss")}>
                {audienceLabel[plan.audience]} · {planTypeLabel[plan.type]}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold">{plan.name}</h2>
              <p className={cn("mt-2 text-sm leading-relaxed", featured ? "text-white/70" : "text-forest/65")}>{plan.summary}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold tracking-[-0.04em] md:text-6xl">{plan.rateCentsPerKwh.toFixed(1)}¢</span>
                <span className={cn("text-sm", featured ? "text-white/60" : "text-forest/55")}>per kWh</span>
              </p>
              <dl className={cn("mt-6 space-y-2.5 border-t pt-5 text-sm", featured ? "border-white/15" : "border-forest/10")}>
                {[
                  ["Term", `${plan.termMonths} months`],
                  ["Monthly fee", formatCurrency(plan.baseChargeMonthly)],
                  ["Cancellation fee", formatFee(plan.earlyTerminationFee)],
                  ["Renewable match", `${plan.renewablePct}%`],
                  ["Natural gas", plan.gasIncluded ? "Included" : "Not included"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-3">
                    <dt className={featured ? "text-white/60" : "text-forest/55"}>{label}</dt>
                    <dd className="font-semibold tabular-nums">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto flex flex-col gap-2 pt-7">
                <Link
                  href={`/contact?plan=${plan.slug}`}
                  className={cn(
                    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg text-sm font-bold transition",
                    featured ? "bg-lime text-forest hover:bg-lime-soft" : "bg-forest text-white hover:bg-forest-soft"
                  )}
                >
                  <CheckIcon className="size-4" aria-hidden />
                  Choose {plan.name}
                </Link>
                <Link
                  href={`#${plan.slug}`}
                  className={cn("inline-flex min-h-11 items-center justify-center text-sm font-semibold", featured ? "text-white/80" : "text-forest/70")}
                >
                  Full plan details
                </Link>
              </div>
            </article>
          )
        })}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-forest/55">{rateDisclosure}</p>
    </SectionWrapper>
  )
}
