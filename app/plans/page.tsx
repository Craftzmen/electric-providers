import type { Metadata } from "next"
import { RouteHero } from "@/components/layout/route-hero"
import { PlansRateTable } from "@/components/plans/plans-rate-table"
import { PlansExplainer } from "@/components/plans/plans-explainer"
import { PlanDetails } from "@/components/plans/plan-details"
import { FaqAccordion } from "@/components/shared/faq-accordion"
import { SupportBlock } from "@/components/layout/support-block"
import { faqByPage } from "@/lib/faq-content"
import { plansPage } from "@/lib/plans-content"
import type { PlanAudience } from "@/lib/rates-content"

export const metadata: Metadata = {
  title: "Plans",
  description: plansPage.description,
  alternates: { canonical: "/plans" },
}

type PlansPageProps = {
  searchParams: Promise<{ zip?: string | string[]; audience?: string | string[] }>
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function PlansPage({ searchParams }: PlansPageProps) {
  const params = await searchParams
  const zipRaw = first(params.zip)
  const zip = zipRaw && /^\d{5}$/.test(zipRaw) ? zipRaw : undefined
  const audienceRaw = first(params.audience)
  const audience: PlanAudience | undefined =
    audienceRaw === "residential" || audienceRaw === "business" ? audienceRaw : undefined

  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Plans" }]}
        eyebrow={plansPage.eyebrow}
        title={plansPage.title}
        description={plansPage.description}
      />
      <PlansRateTable audience={audience} zip={zip} />
      <PlansExplainer />
      <PlanDetails />
      <FaqAccordion items={faqByPage.plans} background="cream" title="Questions about pricing and terms" />
      <SupportBlock title="Not sure which plan fits?" description="Tell us roughly what you spend each month and we will point you to the plan that makes sense. No pressure, no upsell." ctaLabel="Sign up by form" />
    </>
  )
}
