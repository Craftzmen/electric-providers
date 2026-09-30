import Link from "next/link"
import { ArrowRightIcon, CheckIcon, ReceiptTextIcon, UserRoundIcon } from "lucide-react"
import { audienceLabel, formatRate, plans } from "@/lib/rates-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function PlanDetails() {
  return (
    <SectionWrapper background="white">
      <PageSectionHeader eyebrow="The fine print, made readable" title="Plan details" />
      <div className="space-y-5">
        {plans.map((plan) => (
          <article
            key={plan.slug}
            id={plan.slug}
            className="grid scroll-mt-28 gap-8 rounded-2xl border border-forest/10 p-7 md:p-10 lg:grid-cols-[1fr_1.3fr_1fr]"
          >
            <div>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-moss">{audienceLabel[plan.audience]}</span>
              <h3 className="mt-4 font-display text-3xl font-bold text-forest">{plan.name}</h3>
              <p className="mt-2 font-display text-xl text-moss">{formatRate(plan.rateCentsPerKwh)}</p>
              <Link
                href={`/contact?plan=${plan.slug}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-forest px-5 text-sm font-semibold text-white transition hover:bg-forest-soft"
              >
                Sign up for {plan.name}
                <ArrowRightIcon className="size-4" aria-hidden />
              </Link>
            </div>
            <ul className="space-y-3">
              {plan.details.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-forest/80">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-lime">
                    <CheckIcon className="size-3 text-forest" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <div className="rounded-2xl bg-cream p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-forest">
                  <UserRoundIcon className="size-4 text-moss" aria-hidden />
                  Who it suits
                </p>
                <p className="mt-2 text-sm leading-relaxed text-forest/70">{plan.bestFor}</p>
              </div>
              <div className="rounded-2xl bg-cream p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-forest">
                  <ReceiptTextIcon className="size-4 text-moss" aria-hidden />
                  Your statement
                </p>
                <p className="mt-2 text-sm leading-relaxed text-forest/70">{plan.billing}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
