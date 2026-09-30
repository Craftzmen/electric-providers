import type { Metadata } from "next"
import { RouteHero } from "@/components/layout/route-hero"
import { BenefitsGrid } from "@/components/why-choose-us/benefits-grid"
import { Commitments } from "@/components/why-choose-us/commitments"
import { CustomerProtections } from "@/components/why-choose-us/customer-protections"
import { SupportBlock } from "@/components/layout/support-block"
import { PHOTOS } from "@/lib/remote-images"
import { whyChooseUsPage } from "@/lib/why-choose-us-content"

export const metadata: Metadata = {
  title: "Why Us",
  description: whyChooseUsPage.description,
  alternates: { canonical: "/why-choose-us" },
}

export default function WhyChooseUsPage() {
  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Us" }]}
        eyebrow={whyChooseUsPage.eyebrow}
        title={whyChooseUsPage.title}
        description={whyChooseUsPage.description}
        image={PHOTOS.solarDusk}
        imageAlt="Solar panels in front of a modern building under a pink evening sky"
      />
      <BenefitsGrid />
      <Commitments />
      <CustomerProtections />
      <SupportBlock
        title="Hold your current bill up to ours"
        description="Send us a recent statement and we will show you, line by line, what you would pay with Electric Providers."
        ctaLabel="Compare pricing"
        ctaHref="/plans"
      />
    </>
  )
}
