import type { Metadata } from "next"
import { RouteHero } from "@/components/layout/route-hero"
import { ProcessSteps } from "@/components/how-it-works/process-steps"
import { ProcessChecklist } from "@/components/how-it-works/process-checklist"
import { SwitchTimeline } from "@/components/how-it-works/switch-timeline"
import { FaqAccordion } from "@/components/shared/faq-accordion"
import { SupportBlock } from "@/components/layout/support-block"
import { faqByPage } from "@/lib/faq-content"
import { howItWorksPage } from "@/lib/how-it-works-content"
import { PHOTOS } from "@/lib/remote-images"

export const metadata: Metadata = {
  title: "How It Works",
  description: howItWorksPage.description,
  alternates: { canonical: "/how-it-works" },
}

export default function HowItWorksPage() {
  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
        eyebrow={howItWorksPage.eyebrow}
        title={howItWorksPage.title}
        description={howItWorksPage.description}
        image={PHOTOS.houseDusk}
        imageAlt="Wooden family home with warm lights glowing at dusk"
      />
      <ProcessSteps />
      <ProcessChecklist />
      <SwitchTimeline />
      <FaqAccordion items={faqByPage["how-it-works"]} background="white" title="Questions about switching" />
      <SupportBlock title="Ready when you are" description="Sign up online in about five minutes, or call and we will do it together while you are on the phone." ctaLabel="Start signing up" />
    </>
  )
}
