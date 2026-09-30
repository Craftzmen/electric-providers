import type { Metadata } from "next"
import { RouteHero } from "@/components/layout/route-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesDashboard } from "@/components/services/services-dashboard"
import { ServicesAudience } from "@/components/services/services-audience"
import { FaqAccordion } from "@/components/shared/faq-accordion"
import { SupportBlock } from "@/components/layout/support-block"
import { faqByPage } from "@/lib/faq-content"
import { servicesPage } from "@/lib/services-content"
import { PHOTOS } from "@/lib/remote-images"

export const metadata: Metadata = {
  title: "Services",
  description: servicesPage.description,
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        description={servicesPage.description}
        image={PHOTOS.solarRows}
        imageAlt="Rows of solar panels in an open field"
      />
      <ServicesGrid />
      <ServicesDashboard />
      <ServicesAudience />
      <FaqAccordion items={faqByPage.services} background="cream" title="Questions about our service" />
      <SupportBlock />
    </>
  )
}
